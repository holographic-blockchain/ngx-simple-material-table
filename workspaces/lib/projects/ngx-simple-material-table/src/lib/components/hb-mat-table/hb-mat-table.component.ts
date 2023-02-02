import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HbMatTableColumn } from '../hb-mat-table-column/hb-mat-table-column.component';

@Component({
    selector: 'hb-mat-table',
    templateUrl: './hb-mat-table.component.html',
    styleUrls: ['./hb-mat-table.component.scss']
})
export class HbMatTable implements AfterViewInit {
    @Input() displayedColumns: string[] | undefined;
    @Input() gridData: any;
    @Input() canSort: boolean = true;
    @Input() showFooter: boolean = false;
    @Input() isHeaderSticky: boolean = false;
    @Input() selectionMode: HbMatTableSelectionMode = 'none';
    @Input() selectionColor: HbMatTableSelectionColor | undefined = undefined;
    @Input() rowKey: string[] | undefined = undefined; // the data's property names; when undefined, uses the entire row value as the key
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<any>;
    @ContentChildren(HbMatTableColumn) tableColumns!: QueryList<HbMatTableColumn>;
    @ContentChild(MatPaginator) contentPaginator: MatPaginator | undefined;

    public selection: SelectionModel<any> = new SelectionModel<any>(false, []);

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.gridData.sort = this.sort;
        if (this.contentPaginator) {
            this.gridData.paginator = this.contentPaginator;
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

            this.selection = new SelectionModel<any>((this.selectionMode === 'multiple'), []);

            this.changeDetectorRef.detectChanges();
        }
    }

    isAllSelected(): boolean {
        const selectedRowCount = this.selection.selected.length;
        if (this.gridData.length)
            return selectedRowCount === this.gridData.length;

        if (this.gridData.data?.length)
            return selectedRowCount === this.gridData.data.length;

        return false;
    }

    isRowSelected(row: any): boolean {
        return this.selection.isSelected(this.buildRowKey(row));
    }

    toggleAllRows(): void {
        this.isAllSelected()
            ? this.selection.clear()
            : this.gridData.data.forEach((row: any) => this.selection.select(this.buildRowKey(row)));
    }

    toggleRowSelection(row: any): void {
        this.selection.toggle(this.buildRowKey(row));
    }

    /** Builds the row's key used by the selection model. Objects are by reference, so stringify the key to allow for comparisons. */
    private buildRowKey(row: any): any {
        if (this.rowKey) {
            let key: any = {};
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
