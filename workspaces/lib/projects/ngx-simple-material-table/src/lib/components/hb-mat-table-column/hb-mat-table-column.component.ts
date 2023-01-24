import { Component, ContentChild, Input } from '@angular/core';
import { HbMatTableColumnTemplateDirective } from '../../directives/hb-mat-table-column-template.directive';
import { HbMatTableFooterTemplateDirective } from '../../directives/hb-mat-table-footer-template.directive';

@Component({
    selector: 'hb-mat-table-column',
    templateUrl: './hb-mat-table-column.component.html',
    styleUrls: ['./hb-mat-table-column.component.scss']
})
export class HbMatTableColumn {
    @Input() name!: string;
    @Input() dataType: HbMatTableColumnDataType = 'string';
    @Input() dataFormat: string | undefined = undefined;
    @Input() canSort: boolean = true;
    @Input() caption: string | undefined = undefined;

    @ContentChild(HbMatTableColumnTemplateDirective) cellTemplate: HbMatTableColumnTemplateDirective | undefined = undefined;
    @ContentChild(HbMatTableFooterTemplateDirective) footerTemplate: HbMatTableFooterTemplateDirective | undefined = undefined;
}

export declare type HbMatTableColumnDataType = 'string' | 'number' | 'date';
