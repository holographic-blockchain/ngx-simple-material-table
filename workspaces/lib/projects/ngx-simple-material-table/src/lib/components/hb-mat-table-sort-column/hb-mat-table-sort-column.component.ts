import { Component, Input } from '@angular/core';

@Component({
    selector: 'hb-mat-table-sort-column',
    templateUrl: './hb-mat-table-sort-column.component.html',
    styleUrls: ['./hb-mat-table-sort-column.component.scss']
})
export class HbMatTableSortColumn {
    /** The name of the column. This should match the name property of the HbMatTableColumn element. */
    @Input() name!: string;

    /** Which direction to sort, asc or desc. Defaults to asc. */
    @Input() direction: HbMatTableSortColumnDirection = 'asc';
}

export declare type HbMatTableSortColumnDirection = 'asc' | 'desc';
