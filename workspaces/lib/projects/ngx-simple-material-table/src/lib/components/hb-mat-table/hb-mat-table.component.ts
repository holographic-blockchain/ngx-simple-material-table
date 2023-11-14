import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HbMatTableColumn } from '../hb-mat-table-column/hb-mat-table-column.component';
import { HbMatTableSort } from '../hb-mat-table-sort/hb-mat-table-sort.component';

@Component({
    selector: 'hb-mat-table',
    templateUrl: './hb-mat-table.component.html',
    styleUrls: ['./hb-mat-table.component.scss'],
})
export class HbMatTable implements AfterViewInit {
    /** Table-level flag to enable/disable sorting. Both this property and the column's canSort must be true to enable sorting on a column. */
    @Input() canSort: boolean = true;

    /** Which columns should be rendered. These should correspond to the names in the hb-mat-table-column tags. */
    @Input() displayedColumns: string[] | undefined;

    /** Indicates if the header row is sticky. */
    @Input() isHeaderSticky: boolean = false;

    /** The data's property names; when undefined, uses the entire row value as the key. */
    @Input() rowKey: string[] | undefined = undefined;

    /** The color of the row selection checkbox. When not set will simply use the default material checkbox color set by the application. */
    @Input() selectionColor: HbMatTableSelectionColor | undefined = undefined;

    /** The table's selection mode: none, single or multiple. */
    @Input() selectionMode: HbMatTableSelectionMode = 'none';

    /** Indicates if the footer row will be rendered. */
    @Input() showFooter: boolean = false;

    /** The CSS class value which should be applied directly to the table element. */
    @Input() tableClass: string | undefined = undefined;

    /** The data used to populate the table. */
    @Input() tableData: any; // eslint-disable-line @typescript-eslint/no-explicit-any

    /** The MatSort instance associated with this table. This will only be set if canSort is true. */
    @ViewChild(MatSort) sort!: MatSort;

    /** The MatTable instance associated with this table. */
    @ViewChild(MatTable) table!: MatTable<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

    @ContentChildren(HbMatTableColumn) tableColumns!: QueryList<HbMatTableColumn>;
    @ContentChild(HbMatTableSort) initialTableSort: HbMatTableSort | undefined;
    @ContentChild(MatPaginator) contentPaginator: MatPaginator | undefined;

    /** The selection model used with row selection. Use to get or set the currently selected row(s). */
    public selection: SelectionModel<any> = new SelectionModel<any>(false, []); // eslint-disable-line @typescript-eslint/no-explicit-any

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        // if the sort property hasn't been set, set it (this allows the user to override if they want).
        if (!this.tableData.sort) {
            this.tableData.sort = this.sort;
        }

        // if we have a paginator and it hasn't been set then set it (this allows the user to override if they want).
        if (this.contentPaginator && !this.tableData.paginator) {
            this.tableData.paginator = this.contentPaginator;
        }

        // display all defined columns unless they have specified which columns to display
        if (!this.displayedColumns) {
            this.displayedColumns = this.tableColumns.map(col => col.name);

            this.changeDetectorRef.detectChanges();
        }

        // add the 'select' column when there is a selection mode. This will cause issues if there is already a 'select' column defined.
        if (this.selectionMode !== 'none') {
            if (this.displayedColumns.includes('select'))
                throw 'When setting the selection mode, there cannot be another column with the name of \'select\'.';

            this.displayedColumns.unshift('select');

            this.selection = new SelectionModel<any>((this.selectionMode === 'multiple'), []); // eslint-disable-line @typescript-eslint/no-explicit-any

            this.changeDetectorRef.detectChanges();
        }

        // For sortable tables, apply the initial sort if it is defined
        if (this.canSort && this.tableData.sort && this.initialTableSort) {
            if (!this.initialTableSort.sortColumns || !this.initialTableSort.sortColumns.first) {
                console.warn('An HbMatTableSort element was found, but does not contain any HbMatTableSortColumn elements. No default sorting will be applied.');
            } else {
                (this.tableData.sort as MatSort).sort({
                    id: this.initialTableSort.sortColumns.first.name,
                    start: this.initialTableSort.sortColumns.first.direction,
                    disableClear: false
                });
                this.changeDetectorRef.detectChanges();
            }
        }
    }

    /** Determines if all rows are selected. */
    isAllSelected(): boolean {
        const selectedRowCount = this.selection.selected.length;
        if (this.tableData.length)
            return selectedRowCount === this.tableData.length;

        if (this.tableData.data?.length)
            return selectedRowCount === this.tableData.data.length;

        return false;
    }

    /** Determines if the given row is selected. */
    isRowSelected(row: any): boolean { // eslint-disable-line @typescript-eslint/no-explicit-any
        return this.selection.isSelected(this.buildRowKey(row));
    }

    /** If all rows are currently selected, will unselect all rows. Otherwise will select all rows. */
    toggleAllRows(): void {
        if (this.isAllSelected())
            this.selection.clear()
        else if (this.tableData.data)
            this.tableData.data.forEach((row: any) => this.selection.select(this.buildRowKey(row))); // eslint-disable-line @typescript-eslint/no-explicit-any
        else
            this.tableData.forEach((row: any) => this.selection.select(this.buildRowKey(row))); // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    /** Toggles the selection status of the given row. */
    toggleRowSelection(row: any): void { // eslint-disable-line @typescript-eslint/no-explicit-any
        this.selection.toggle(this.buildRowKey(row));
    }

    /** Builds the row's key used by the selection model. Objects are by reference, so stringify the key to allow for comparisons. */
    private buildRowKey(row: any): any { // eslint-disable-line @typescript-eslint/no-explicit-any
        if (this.rowKey) {
            const key: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
            this.rowKey.forEach(propName => {
                key[propName] = row[propName];
            });
            return JSON.stringify(key);
        }

        return JSON.stringify(row);
    }
}

export declare type HbMatTableSelectionMode = 'none' | 'single' | 'multiple';
export declare type HbMatTableSelectionColor = 'primary' | 'accent' | 'warn';
