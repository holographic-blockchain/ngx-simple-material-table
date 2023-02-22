import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataTypesEntity } from '../../models/data-types-entity';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
    matGridData01: MatTableDataSource<DataTypesEntity>;
    matGridData02: MatTableDataSource<DataTypesEntity>;
    matGridData03: MatTableDataSource<DataTypesEntity>;
    matGridData04: MatTableDataSource<DataTypesEntity>;
    matGridData05: MatTableDataSource<DataTypesEntity>;
    matGridData06: MatTableDataSource<DataTypesEntity>;
    matGridData07: MatTableDataSource<DataTypesEntity>;
    matGridData08: MatTableDataSource<DataTypesEntity>;
    matGridData09: MatTableDataSource<DataTypesEntity>;
    matGridData10: MatTableDataSource<DataTypesEntity>;
    matGridData11: MatTableDataSource<DataTypesEntity>;
    matGridData12: MatTableDataSource<DataTypesEntity>;
    matGridData13: MatTableDataSource<DataTypesEntity>;
    matGridData14: MatTableDataSource<DataTypesEntity>;
    matGridData15: MatTableDataSource<DataTypesEntity>;
    matGridData16: MatTableDataSource<DataTypesEntity>;
    gridBasicColumns: string[] = ['string1', 'number1', 'dateString'];
    sampleFooterValue: number = 33432432;

    private _gridFilter10: string = '';

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData05 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData06 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData07 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData08 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData09 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData10 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData11 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData12 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData13 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData14 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData15 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData16 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
    }

    get gridFilter10(): string {
        return this._gridFilter10;
    }
    set gridFilter10(value: string) {
        this._gridFilter10 = value;
        this.matGridData10.filter = value;
    }
}

