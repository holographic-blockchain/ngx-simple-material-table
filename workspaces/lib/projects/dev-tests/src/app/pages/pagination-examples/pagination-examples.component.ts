import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralDataEntity } from '../../models/general-data-entity';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-pagination-examples',
    templateUrl: './pagination-examples.component.html',
    styleUrls: ['./pagination-examples.component.scss']
})
export class PaginationExamplesComponent implements AfterViewInit {
    @ViewChild('basicPaginator') matPaginator02!: MatPaginator

    matGridData01: MatTableDataSource<GeneralDataEntity>;
    matGridData02: MatTableDataSource<GeneralDataEntity>;
    matGridData03: MatTableDataSource<GeneralDataEntity>;
    matGridData04: MatTableDataSource<GeneralDataEntity>;
    matGridData05: MatTableDataSource<GeneralDataEntity>;

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<GeneralDataEntity>(this.dataService.pagedGridData);
        this.matGridData02 = new MatTableDataSource<GeneralDataEntity>(this.dataService.pagedGridData);
        this.matGridData03 = new MatTableDataSource<GeneralDataEntity>(this.dataService.pagedGridData);
        this.matGridData04 = new MatTableDataSource<GeneralDataEntity>(this.dataService.pagedGridData);
        this.matGridData05 = new MatTableDataSource<GeneralDataEntity>(this.dataService.pagedGridData);
    }

    ngAfterViewInit(): void {
        this.matGridData02.paginator = this.matPaginator02;
    }
}
