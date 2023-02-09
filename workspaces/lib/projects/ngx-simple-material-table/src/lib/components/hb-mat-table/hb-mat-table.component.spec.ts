import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HbMatTable } from './hb-mat-table.component';

describe('HbMatTable', () => {
    let component: HbMatTable;
    let fixture: ComponentFixture<HbMatTable>;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [HbMatTable],
                imports: [
                    MatCheckboxModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatTableModule,
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(HbMatTable);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
