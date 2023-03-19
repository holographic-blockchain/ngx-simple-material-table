import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-style-examples',
    templateUrl: './style-examples.component.html',
    styleUrls: ['./style-examples.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StyleExamplesComponent {
    matStyleGridData: MatTableDataSource<any>;
    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;
    matGridData03: MatTableDataSource<UserInfo>;
    matGridData04: MatTableDataSource<UserInfo>;

    constructor(private dataService: DataService) {
        this.matStyleGridData = new MatTableDataSource<any>([
            {
                'htmlElement': 'table',
                'cssClasses': 'mat-mdc-table mdc-data-table__table cdk-table',
            },
            {
                'htmlElement': 'table thead tr',
                'cssClasses': 'mat-mdc-header-row mdc-data-table__header-row cdk-header-row',
            },
            {
                'htmlElement': 'table thead tr th',
                'cssClasses': 'mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-{columnName} mat-column-{columnName}',
            },
            {
                'htmlElement': 'table tbody',
                'cssClasses': 'mdc-data-table__content',
            },
            {
                'htmlElement': 'table tbody tr',
                'cssClasses': 'mat-mdc-row mdc-data-table__row cdk-row',
            },
            {
                'htmlElement': 'table tbody tr td',
                'cssClasses': 'mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-{columnName} mat-column-{columnName}',
            },
            {
                'htmlElement': 'table tfoot tr',
                'cssClasses': 'mat-mdc-footer-row mdc-data-table__row cdk-footer-row',
            },
            {
                'htmlElement': 'table tbody tr td',
                'cssClasses': 'mat-mdc-footer-cell mdc-data-table__cell cdk-footer-cell cdk-column-{columnName} mat-column-{columnName}',
            },
        ]);

        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
    }
}
