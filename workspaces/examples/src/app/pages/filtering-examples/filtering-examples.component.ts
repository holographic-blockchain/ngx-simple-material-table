import { AfterViewInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-filtering-examples',
    templateUrl: './filtering-examples.component.html',
    styleUrls: ['./filtering-examples.component.scss']
})
export class FilteringExamplesComponent implements AfterViewInit {
    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;

    private _gridFilter01: string = '';
    private _gridFilter02: string = '';

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
    }

    get gridFilter01(): string {
        return this._gridFilter01;
    }
    get gridFilter02(): string {
        return this._gridFilter02;
    }

    set gridFilter02(value: string) {
        this._gridFilter02 = value;
        this.matGridData02.filter = value;
    }
    set gridFilter01(value: string) {
        this._gridFilter01 = value;
        this.matGridData01.filter = value;
    }

    ngAfterViewInit(): void {
        this.matGridData02.filterPredicate = (data, filter) => {
            if (data.lastName?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
                return true;

            return false;
        };
    }
}
