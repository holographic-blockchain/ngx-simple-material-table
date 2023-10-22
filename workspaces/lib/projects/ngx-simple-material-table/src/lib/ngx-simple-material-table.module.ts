import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HbMatTable } from './components/hb-mat-table/hb-mat-table.component';
import { HbMatTableColumn } from './components/hb-mat-table-column/hb-mat-table-column.component';
import { HbMatTableColumnHeaderPipe } from './pipes/hb-mat-table-column-header.pipe';
import { HbMatTableColumnTemplateDirective } from './directives/hb-mat-table-column-template.directive';
import { HbMatTableFooterTemplateDirective } from './directives/hb-mat-table-footer-template.directive';
import { HbMatTableSort } from './components/hb-mat-table-sort/hb-mat-table-sort.component';
import { HbMatTableSortColumn } from './components/hb-mat-table-sort-column/hb-mat-table-sort-column.component';

@NgModule({
    declarations: [
        HbMatTable,
        HbMatTableColumn,
        HbMatTableColumnHeaderPipe,
        HbMatTableColumnTemplateDirective,
        HbMatTableFooterTemplateDirective,
        HbMatTableSort,
        HbMatTableSortColumn,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CdkTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [
        HbMatTable,
        HbMatTableColumn,
        HbMatTableColumnTemplateDirective,
        HbMatTableFooterTemplateDirective,
        HbMatTableSort,
        HbMatTableSortColumn,
    ]
})
export class NgxSimpleMaterialTableModule { }
