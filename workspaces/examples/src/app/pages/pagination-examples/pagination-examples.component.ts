import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pagination-examples',
  templateUrl: './pagination-examples.component.html',
  styleUrls: ['./pagination-examples.component.scss']
})
export class PaginationExamplesComponent implements AfterViewInit {
    @ViewChild('externalPaginator') matPaginator02!: MatPaginator;

    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
    }

    ngAfterViewInit(): void {
        this.matGridData02.paginator = this.matPaginator02;
    }
}
