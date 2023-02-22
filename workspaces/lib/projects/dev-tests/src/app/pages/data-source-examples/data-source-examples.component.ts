import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { HbMatTable } from '../../../../../../dist/ngx-simple-material-table';
import { DataTypesEntity } from '../../models/data-types-entity';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-data-source-examples',
    templateUrl: './data-source-examples.component.html',
    styleUrls: ['./data-source-examples.component.scss']
})
export class DataSourceExamplesComponent {
    @ViewChild('table01') table01!: HbMatTable
    @ViewChild('table02') table02!: HbMatTable
    @ViewChild('table03') table03!: HbMatTable

    matGridData01: MatTableDataSource<DataTypesEntity>;
    gridData02: DataTypesEntity[] = [];
    obsGridData03: Observable<DataTypesEntity[]>;

    private _localGridData01: DataTypesEntity[] = [];
    private _localGridData03: DataTypesEntity[] = [];

    constructor(private dataService: DataService) {
        this._localGridData01 = [...this.dataService.gridData];
        this.matGridData01 = new MatTableDataSource<DataTypesEntity>(this._localGridData01);
        this.gridData02 = [...this.dataService.gridData];
        this._localGridData03 = [...this.dataService.gridData];
        this.obsGridData03 = of(this._localGridData03);
    }

    addRecord01(): void {
        this._localGridData01.push({
            'id': 100,
            'string1': 'New Record',
            'string2': 'new record',
            'stringWithALongName': 'still a new record',
            'number1': 999,
            'dateDate': DateTime.now().minus({ minutes: 1 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 1 }).toISO(),
        });
        this.matGridData01.data = this._localGridData01;
    }

    addRecord02(): void {
        this.gridData02.push({
            'id': 100,
            'string1': 'New Record',
            'string2': 'new record',
            'stringWithALongName': 'still a new record',
            'number1': 999,
            'dateDate': DateTime.now().minus({ minutes: 1 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 1 }).toISO(),
        });

        this.table02.table.renderRows();
    }

    addRecord03(): void {
        
        this._localGridData03.push({
            'id': 100,
            'string1': 'New Record',
            'string2': 'new record',
            'stringWithALongName': 'still a new record',
            'number1': 999,
            'dateDate': DateTime.now().minus({ minutes: 1 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 1 }).toISO(),
        });

        this.table03.table.renderRows();
    }
}
