import { Component, ContentChildren, QueryList } from '@angular/core';
import { HbMatTableSortColumn } from '../hb-mat-table-sort-column/hb-mat-table-sort-column.component';

@Component({
  selector: 'hb-mat-table-sort',
  templateUrl: './hb-mat-table-sort.component.html',
  styleUrls: ['./hb-mat-table-sort.component.scss']
})
export class HbMatTableSort {
    @ContentChildren(HbMatTableSortColumn) sortColumns!: QueryList<HbMatTableSortColumn>;

}
