import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';
import { DataTypesEntity } from '../../models/data-types-entity';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-sorting-examples',
    templateUrl: './sorting-examples.component.html',
    styleUrls: ['./sorting-examples.component.scss']
})
export class SortingExamplesComponent {
    matGridData01: MatTableDataSource<DataTypesEntity>;
    matGridData02: MatTableDataSource<DataTypesEntity>;
    matGridData03: MatTableDataSource<DataTypesEntity>;
    matGridData04: MatTableDataSource<DataTypesEntity>;
    matGridData05: MatTableDataSource<DataTypesEntity>;

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
        this.matGridData04.sortingDataAccessor = (data: DataTypesEntity, sortHeaderId: string): string | number => {
            // the sortHeaderId is the name of the column, not the header text
            switch (sortHeaderId) {
                case 'id': return data.id ?? 0;
                case 'string1': return data.string1 ?? '';
                case 'stringWithALongName': return data.stringWithALongName ?? '';
                case 'number1': return data.number1 ?? 0;
                case 'dateDate':
                    if (data.dateDate == null) return 0;
                    return <number>data.dateDate;
                case 'dateString':
                    if (data.dateString)
                        return DateTime.fromISO(data.dateString).toMillis();
                    return 0;
                case 'derived':
                    return `${data.string1} ${data.number1}`;
            }

            return '';
        };
        this.matGridData05 = new MatTableDataSource<DataTypesEntity>(this.dataService.gridData);
    }
}
