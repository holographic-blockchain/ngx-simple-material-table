import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-column-examples',
    templateUrl: './column-examples.component.html',
    styleUrls: ['./column-examples.component.scss']
})
export class ColumnExamplesComponent {
    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;
    matGridData03: MatTableDataSource<UserInfo>;
    matGridData04: MatTableDataSource<UserInfo>;
    matGridData05: MatTableDataSource<UserInfo>;
    matGridData06: MatTableDataSource<UserInfo>;
    matGridData07: MatTableDataSource<UserInfo>;
    matGridData08: MatTableDataSource<UserInfo>;
    matGridData09: MatTableDataSource<UserInfo>;
    customColumnDisplay: string[] = ['lastName', 'firstName', 'birthDate'];
    sampleFooterValue: number = 27.3;

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData05 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData06 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData07 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData08 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData09 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
    }

}
