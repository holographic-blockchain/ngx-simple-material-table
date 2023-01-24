import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
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
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<any>;
    @ContentChildren(HbMatTableColumn) tableColumns!: QueryList<HbMatTableColumn>;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        
    }

    ngAfterViewInit(): void {
        this.gridData.sort = this.sort;

        // display all defined columns unless they have specified which columns to display
        if (!this.displayedColumns) {
            this.displayedColumns = this.tableColumns.map(col => col.name);

            this.changeDetectorRef.detectChanges();
        }
    }
}
