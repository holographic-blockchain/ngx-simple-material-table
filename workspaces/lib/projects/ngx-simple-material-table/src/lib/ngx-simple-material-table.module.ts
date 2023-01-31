import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { NgxSimpleMaterialTableComponent } from './ngx-simple-material-table.component';
import { HbMatTable } from './components/hb-mat-table/hb-mat-table.component';
import { HbMatTableColumn } from './components/hb-mat-table-column/hb-mat-table-column.component';
import { HbMatTableColumnTemplateDirective } from './directives/hb-mat-table-column-template.directive';
import { HbMatTableColumnHeaderPipe } from './pipes/hb-mat-table-column-header.pipe';
import { HbMatTableFooterTemplateDirective } from './directives/hb-mat-table-footer-template.directive';

@NgModule({
    declarations: [
        NgxSimpleMaterialTableComponent,
        HbMatTable,
        HbMatTableColumn,
        HbMatTableColumnTemplateDirective,
        HbMatTableColumnHeaderPipe,
        HbMatTableFooterTemplateDirective
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CdkTableModule,
        MatCheckboxModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [
        NgxSimpleMaterialTableComponent,
        HbMatTable,
        HbMatTableColumn,
        HbMatTableColumnTemplateDirective,
        HbMatTableFooterTemplateDirective,
    ]
})
export class NgxSimpleMaterialTableModule { }
