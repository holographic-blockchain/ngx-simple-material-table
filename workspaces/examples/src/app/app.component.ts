import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
            'string1': 'Consectetur purus',
            'string2': 'faucibus pulvinar',
            'stringWithALongName': 'Duis ultricies lacus sed turpis tincidunt',
            'number1': 5806612,
            'dateDate': DateTime.now().minus({ minutes: 34 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 34 }).toISO(),
        },
    ];
    matGridData: MatTableDataSource<DataEntity>;
    gridBasicColumns: string[] = ['string1', 'string2', 'number1', 'dateDate', 'dateString', 'derived']; //, 'stringWithALongName'

    constructor() {
        this.matGridData = new MatTableDataSource<DataEntity>(this.gridData);
    }
}

export class DataEntity { 
    string1: string | null = null;
    string2: string | null = null;
    stringWithALongName: string | null = null;
    number1: number | null = null;
    dateDate: Date | number | null = null;
    dateString: string | null = null;
}
