import { Component, ContentChild, Input } from '@angular/core';
import { HbMatTableColumnTemplateDirective } from '../../directives/hb-mat-table-column-template.directive';
import { HbMatTableFooterTemplateDirective } from '../../directives/hb-mat-table-footer-template.directive';

@Component({
    selector: 'hb-mat-table-column',
    templateUrl: './hb-mat-table-column.component.html',
    styleUrls: ['./hb-mat-table-column.component.scss']
})
export class HbMatTableColumn {
    /** The name of the column. By default, the table data property with the same name will be displayed. */
    @Input() name!: string;

    /** The general type of data contained by the column. */
    @Input() dataType: HbMatTableColumnDataType = 'string';

    /** The custom format to display the data. For 'number' data types, this is the 'digitsInfo' parameter passed to the
     *  DecimalPipe. For 'date' data types, this is the 'format' parameter for the DatePipe.
     * */
    @Input() dataFormat: string | undefined = undefined;

    /** Indicates if this column can be sorted. The table-level canSort property must also be true. */
    @Input() canSort: boolean = true;

    /** A custom caption for the column. Otherwise will create the caption from the name property. */
    @Input() caption: string | undefined = undefined;

    /** Indicates if this column should be sticky and located at the start of the columns. */
    @Input() isStickyStart: boolean = false;

    /** Indicates if this column should be sticky and located at the end of the columns. */
    @Input() isStickyEnd: boolean = false;

    @ContentChild(HbMatTableColumnTemplateDirective) cellTemplate: HbMatTableColumnTemplateDirective | undefined = undefined;
    @ContentChild(HbMatTableFooterTemplateDirective) footerTemplate: HbMatTableFooterTemplateDirective | undefined = undefined;
}

export declare type HbMatTableColumnDataType = 'string' | 'number' | 'date';
