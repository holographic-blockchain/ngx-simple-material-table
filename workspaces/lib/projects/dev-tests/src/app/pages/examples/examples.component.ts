import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';
import { HbMatTable } from '../../../../../../dist/ngx-simple-material-table';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
    gridData: DataEntity[] = [
        {
            'string1': 'Lorem ipsum',
            'string2': 'dolor sit',
            'stringWithALongName': 'Enim ut tellus elementum sagittis vitae',
            'number1': 999,
            'dateDate': DateTime.now().minus({ months: 1 }).toJSDate(),
            'dateString': DateTime.now().minus({ months: 1 }).toISO(),
        },
        {
            'string1': 'Consequat',
            'string2': 'esse cillum',
            'stringWithALongName': 'Integer eget aliquet nibh',
            'number1': 156,
            'dateDate': DateTime.now().minus({ days: 3 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 3 }).toISO(),
        },
        {
            'string1': 'Ut labore',
            'string2': 'dolor sit',
            'stringWithALongName': 'Euismod lacinia at quis',
            'number1': 0,
            'dateDate': DateTime.now().minus({ hours: 5 }).toJSDate(),
            'dateString': DateTime.now().minus({ hours: 5 }).toISO(),
        },
        {
            'string1': 'Viverra suspendisse potenti',
            'string2': 'ut labore',
            'stringWithALongName': null,
            'number1': 1597361,
            'dateDate': DateTime.now().minus({ days: 2 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 2 }).toISO(),
        },
        {
            'string1': 'Blandit aliquam',
            'string2': 'nunc non blandit',
            'stringWithALongName': 'Massa vitae tortor condimentum lacinia quis',
            'number1': 48916,
            'dateDate': DateTime.now().minus({ minutes: 8 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 8 }).toISO(),
        },
        {
            'string1': 'Fringilla ut morbi tincidunt',
            'string2': 'augue interdum',
            'stringWithALongName': 'Sapien nec sagittis aliquam malesuada',
            'number1': 78148,
            'dateDate': DateTime.now().minus({ days: 12, hours: 3 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 12, hours: 3 }).toISO(),
        },
        {
            'string1': 'Risus commodo',
            'string2': 'viverra maecenas',
            'stringWithALongName': 'A cras semper auctor neque vitae tempus',
            'number1': 12,
            'dateDate': DateTime.now().minus({ hours: 7 }).toJSDate(),
            'dateString': DateTime.now().minus({ hours: 7 }).toISO(),
        },
        {
            'string1': 'Blandit aliquam',
            'string2': 'faucibus pulvinar',
            'stringWithALongName': 'Duis ultricies lacus sed turpis tincidunt',
            'number1': 5806612,
            'dateDate': DateTime.now().minus({ minutes: 34 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 34 }).toISO(),
        },
    ];
    matGridData01: MatTableDataSource<DataEntity>;
    matGridData02: MatTableDataSource<DataEntity>;
    matGridData03: MatTableDataSource<DataEntity>;
    matGridData04: MatTableDataSource<DataEntity>;
    matGridData05: MatTableDataSource<DataEntity>;
    matGridData06: MatTableDataSource<DataEntity>;
    matGridData07: MatTableDataSource<DataEntity>;
    matGridData08: MatTableDataSource<DataEntity>;
    matGridData09: MatTableDataSource<DataEntity>;
    matGridData10: MatTableDataSource<DataEntity>;
    matGridData11: MatTableDataSource<DataEntity>;
    matGridData12: MatTableDataSource<DataEntity>;
    matGridData13: MatTableDataSource<DataEntity>;
    matGridData14: MatTableDataSource<DataEntity>;
    matGridData15: MatTableDataSource<DataEntity>;
    matGridData16: MatTableDataSource<DataEntity>;
    gridBasicColumns: string[] = ['string1', 'number1', 'dateString'];
    sampleFooterValue: number = 33432432;

    private _gridFilter10: string = '';
    get gridFilter10(): string {
        return this._gridFilter10;
    }
    set gridFilter10(value: string) {
        this._gridFilter10 = value;
        this.matGridData10.filter = value;
    }

    @ViewChild('singleSelectTable') table14: HbMatTable | null = null;

    constructor() {
        this.matGridData01 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData02 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData03 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData04 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData05 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData06 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData07 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData08 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData09 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData10 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData11 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData12 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData13 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData14 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData15 = new MatTableDataSource<DataEntity>(this.gridData);
        this.matGridData16 = new MatTableDataSource<DataEntity>(this.gridData);
    }
}

class DataEntity {
    string1: string | null = null;
    string2: string | null = null;
    stringWithALongName: string | null = null;
    number1: number | null = null;
    dateDate: Date | number | null = null;
    dateString: string | null = null;
}
