import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HbMatTable } from '../../../../../../dist/ngx-simple-material-table';
import { DataTypesEntity } from '../../models/data-types-entity';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-selection-examples',
  templateUrl: './selection-examples.component.html',
  styleUrls: ['./selection-examples.component.scss']
})
export class SelectionExamplesComponent implements AfterViewInit {
    @ViewChild('singleSelectTable') table01: HbMatTable | undefined;
    @ViewChild('multiSelectTable') table02: HbMatTable | undefined;
    @ViewChild('customSelectColorTable') table03: HbMatTable | undefined;
    @ViewChild('customRowKeyTable') table04: HbMatTable | undefined;

    matGridData01: MatTableDataSource<DataTypesEntity>;
    matGridData02: MatTableDataSource<DataTypesEntity>;
    matGridData03: MatTableDataSource<DataTypesEntity>;
    matGridData04: MatTableDataSource<DataTypesEntity>;
    matGridData05: MatTableDataSource<DataTypesEntity>;

    constructor(private dataService: DataService,
        private changeDetectorRef: ChangeDetectorRef) {
        this.matGridData01 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData05 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);

    }

    ngAfterViewInit(): void {
        // the view child properties are undefined initially, and without this referencing the selection directly causes
        // an Expression Changed error.
        this.changeDetectorRef.detectChanges();
    }
}
