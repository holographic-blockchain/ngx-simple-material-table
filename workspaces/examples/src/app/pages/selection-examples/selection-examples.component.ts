import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HbMatTable } from 'ngx-simple-material-table/public-api';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-selection-examples',
    templateUrl: './selection-examples.component.html',
    styleUrls: ['./selection-examples.component.scss']
})
export class SelectionExamplesComponent implements AfterViewInit {
    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;
    matGridData03: MatTableDataSource<UserInfo>;
    matGridData04: MatTableDataSource<UserInfo>;
    matGridData05: MatTableDataSource<UserInfo>;
    matGridData06: MatTableDataSource<UserInfo>;

    @ViewChild('singleSelectTable') table01: HbMatTable | undefined;
    @ViewChild('multiSelectTable') table02: HbMatTable | undefined;
    @ViewChild('customSelectColorTable') table03: HbMatTable | undefined;
    @ViewChild('customRowKeyTable') table04: HbMatTable | undefined;
    @ViewChild('singleRowKeyPropertyTable') table05: HbMatTable | undefined;
    @ViewChild('multiRowKeyPropertyTable') table06: HbMatTable | undefined;

    get table05_selectedJson(): any | null {
        if (this.table05?.selection && this.table05.selection.selected.length > 0) {
            return JSON.parse(this.table05.selection.selected[0]);
        }
        return null;
    }

    get table06_selectedJson(): any | null {
        if (this.table06?.selection && this.table06.selection.selected.length > 0) {

            // the selected value is an array of strings. Parse all of them to get an array of objects.
            let selectedObjects: UserInfo[] = this.table06.selection.selected.map((val: any) => {
                return JSON.parse(val);
            });

            return selectedObjects;
        }
        return null;
    }

    constructor(private dataService: DataService,
        private changeDetectorRef: ChangeDetectorRef) {
        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData05 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData06 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
    }

    ngAfterViewInit(): void {
        // the view child properties are undefined initially, and referencing the
        // selection directly causes an Expression Changed error without this.
        this.changeDetectorRef.detectChanges();
    }
}
