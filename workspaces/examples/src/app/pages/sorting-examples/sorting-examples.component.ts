import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from '../../models/user-info';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sorting-examples',
  templateUrl: './sorting-examples.component.html',
  styleUrls: ['./sorting-examples.component.scss']
})
export class SortingExamplesComponent {
    matGridData01: MatTableDataSource<UserInfo>;
    matGridData02: MatTableDataSource<UserInfo>;
    matGridData03: MatTableDataSource<UserInfo>;
    matGridData04: MatTableDataSource<UserInfo>;

    constructor(private dataService: DataService) {
        this.matGridData01 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData02 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData03 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData04 = new MatTableDataSource<UserInfo>(this.dataService.gridData);
        this.matGridData04.sortingDataAccessor = (data: UserInfo, sortHeaderId: string): string | number => {
            // the sortHeaderId is the name of the column, not the header text
            switch (sortHeaderId) {
                case 'userId': return data.userId ?? 0;
                case 'firstName': return data.firstName ?? '';
                case 'lastName': return data.lastName ?? '';
                case 'age': return data.age ?? 0;
                case 'birthDate':
                    if (data.birthDate == null) return 0;
                    return data.birthDate.valueOf();
                case 'fullName':
                    return `${data.lastName} ${data.firstName}`;
            }

            return '';
        };
    }
}
