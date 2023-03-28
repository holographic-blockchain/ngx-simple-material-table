import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { HbMatTable } from './hb-mat-table.component';
import { HbMatTableColumn } from '../hb-mat-table-column/hb-mat-table-column.component';
import { HbMatTableColumnHeaderPipe } from '../../pipes/hb-mat-table-column-header.pipe';
import { HbMatTableColumnTemplateDirective } from '../../directives/hb-mat-table-column-template.directive';
import { HbMatTableFooterTemplateDirective } from '../../directives/hb-mat-table-footer-template.directive';
import { DateTime } from 'luxon';
import { DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

describe('HbMatTable', () => {
    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    HbMatTable,
                    HbMatTableColumn,
                    HbMatTableColumnHeaderPipe,
                    HbMatTableColumnTemplateDirective,
                    HbMatTableFooterTemplateDirective,
                    MockBasicTableOneRow,
                    MockBasicTableOneRowLongColumnName,
                    MockBasicTableOneRowCustomColumnRendering,
                    MockBasicTableOneRowColumnDataTypes,
                ],
                imports: [
                    MatCheckboxModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatTableModule,
                    NoopAnimationsModule,
                ]
            })
            .compileComponents();
    });

    it('basic table', () => {
        let fixture = TestBed.createComponent(MockBasicTableOneRow);
        fixture.detectChanges();

        const tableElement = fixture.nativeElement.querySelector('table')!;
        const data = fixture.componentInstance.componentData.data;

        expectTableToMatchContent(tableElement,
            [
                ['Column1', 'Column2'],
                [data[0].column1, data[0].column2]
            ]);
    });

    it('long column name is split into words', () => {
        let fixture = TestBed.createComponent(MockBasicTableOneRowLongColumnName);
        fixture.detectChanges();

        const tableElement = fixture.nativeElement.querySelector('table')!;
        const data = fixture.componentInstance.componentData.data;

        expectTableToMatchContent(tableElement,
            [
                ['Column1', 'This Is Column Two'],
                [data[0].column1, data[0].thisIsColumnTwo]
            ]);
    });

    it('column data types format the cell value', () => {
        let fixture = TestBed.createComponent(MockBasicTableOneRowColumnDataTypes);
        fixture.detectChanges();

        const tableElement = fixture.nativeElement.querySelector('table')!;
        const data = fixture.componentInstance.componentData.data;

        const decimalPipe = new DecimalPipe('en-US');
        const datePipe = new DatePipe('en-US');
        const percentPipe = new PercentPipe('en-US');

        expectTableToMatchContent(tableElement,
            [
                ['String Column', 'Number Column', 'Date Iso Column', 'Date Js Column', 'Percent Column'],
                [
                    data[0].stringColumn,
                    decimalPipe.transform(data[0].numberColumn),
                    datePipe.transform(data[0].dateIsoColumn),
                    datePipe.transform(data[0].dateJsColumn),
                    percentPipe.transform(data[0].percentColumn)
                ]
            ]);
    });

    it('custom column template', () => {
        let fixture = TestBed.createComponent(MockBasicTableOneRowCustomColumnRendering);
        fixture.detectChanges();

        const tableElement = fixture.nativeElement.querySelector('table')!;
        const data = fixture.componentInstance.componentData.data;

        expectTableToMatchContent(tableElement,
            [
                ['Column1', 'Column2'],
                [data[0].column1, data[0].column2.toUpperCase()]
            ]);
    });

});

@Component({
    template: `
        <hb-mat-table [tableData]="componentData">
            <hb-mat-table-column name="column1"></hb-mat-table-column>
            <hb-mat-table-column name="column2"></hb-mat-table-column>
        </hb-mat-table>
    `,
})
class MockBasicTableOneRow {
    componentData: MatTableDataSource<any> = new MatTableDataSource<any>([{
        'column1': 'row01 cell01',
        'column2': 'row01 cell02',
    }]);
}

@Component({
    template: `
        <hb-mat-table [tableData]="componentData">
            <hb-mat-table-column name="column1"></hb-mat-table-column>
            <hb-mat-table-column name="thisIsColumnTwo"></hb-mat-table-column>
        </hb-mat-table>
    `,
})
class MockBasicTableOneRowLongColumnName {
    componentData: MatTableDataSource<any> = new MatTableDataSource<any>([{
        'column1': 'row01 cell01',
        'thisIsColumnTwo': 'row01 cell02',
    }]);
}

@Component({
    template: `
        <hb-mat-table [tableData]="componentData">
            <hb-mat-table-column name="stringColumn"></hb-mat-table-column>
            <hb-mat-table-column name="numberColumn" dataType="number"></hb-mat-table-column>
            <hb-mat-table-column name="dateIsoColumn" dataType="date"></hb-mat-table-column>
            <hb-mat-table-column name="dateJsColumn" dataType="date"></hb-mat-table-column>
            <hb-mat-table-column name="percentColumn" dataType="percent"></hb-mat-table-column>
        </hb-mat-table>
    `,
})
class MockBasicTableOneRowColumnDataTypes {
    testDate = new Date(2020, 3, 9, 4, 12, 24, 356);

    componentData: MatTableDataSource<any> = new MatTableDataSource<any>([{
        'stringColumn': 'row01 cell01',
        'numberColumn': 12345.6789,
        'dateIsoColumn': DateTime.fromJSDate(this.testDate).toISO(),
        'dateJsColumn': this.testDate,
        'percentColumn': 0.12345,
    }]);
}

@Component({
    template: `
        <hb-mat-table [tableData]="componentData">
            <hb-mat-table-column name="column1"></hb-mat-table-column>
            <hb-mat-table-column name="column2">
                <div *hbMatTableColumnTemplate="let data">{{ data.column2 | uppercase }}</div>
            </hb-mat-table-column>
        </hb-mat-table>
    `,
})
class MockBasicTableOneRowCustomColumnRendering {
    componentData: MatTableDataSource<any> = new MatTableDataSource<any>([{
        'column1': 'row01 cell01',
        'column2': 'row01 cell02',
    }]);
}


//-------- Supporting Functions -------------------------
// --- copied directly from Material table unit tests ---
//-------------------------------------------------------

function getElements(element: Element, query: string): Element[] {
    return [].slice.call(element.querySelectorAll(query));
}

function getHeaderRows(tableElement: Element): Element[] {
    return [].slice.call(tableElement.querySelectorAll('.mat-mdc-header-row'))!;
}

function getFooterRows(tableElement: Element): Element[] {
    return [].slice.call(tableElement.querySelectorAll('.mat-mdc-footer-row'))!;
}

function getRows(tableElement: Element): Element[] {
    return getElements(tableElement, '.mat-mdc-row');
}

function getCells(row: Element): Element[] {
    if (!row) {
        return [];
    }

    return getElements(row, 'td');
}

function getHeaderCells(headerRow: Element): Element[] {
    return getElements(headerRow, 'th');
}

function getFooterCells(footerRow: Element): Element[] {
    return getElements(footerRow, 'td');
}

function getActualTableContent(tableElement: Element): string[][] {
    let actualTableContent: Element[][] = [];
    getHeaderRows(tableElement).forEach(row => {
        actualTableContent.push(getHeaderCells(row));
    });

    // Check data row cells
    const rows = getRows(tableElement).map(row => getCells(row));
    actualTableContent = actualTableContent.concat(rows);

    getFooterRows(tableElement).forEach(row => {
        actualTableContent.push(getFooterCells(row));
    });

    // Convert the nodes into their text content;
    return actualTableContent.map(row => row.map(cell => cell.textContent!.trim()));
}

export function expectTableToMatchContent(tableElement: Element, expected: any[]) {
    const missedExpectations: string[] = [];
    function checkCellContent(actualCell: string, expectedCell: string) {
        if (actualCell !== expectedCell) {
            missedExpectations.push(`Expected cell contents to be ${expectedCell} but was ${actualCell}`);
        }
    }

    const actual = getActualTableContent(tableElement);

    // Make sure the number of rows match
    if (actual.length !== expected.length) {
        missedExpectations.push(`Expected ${expected.length} total rows but got ${actual.length}`);
        fail(missedExpectations.join('\n'));
    }

    actual.forEach((row, rowIndex) => {
        const expectedRow = expected[rowIndex];

        // Make sure the number of cells match
        if (row.length !== expectedRow.length) {
            missedExpectations.push(`Expected ${expectedRow.length} cells in row but got ${row.length}`);
            fail(missedExpectations.join('\n'));
        }

        row.forEach((actualCell, cellIndex) => {
            const expectedCell = expectedRow ? expectedRow[cellIndex] : null;
            checkCellContent(actualCell, expectedCell);
        });
    });

    if (missedExpectations.length) {
        fail(missedExpectations.join('\n'));
    }
}
