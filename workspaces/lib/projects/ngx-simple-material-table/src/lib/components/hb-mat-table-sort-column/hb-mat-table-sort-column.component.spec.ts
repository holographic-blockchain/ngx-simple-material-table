import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbMatTableSortColumn } from './hb-mat-table-sort-column.component';

describe('HbMatTableSortColumn', () => {
    let component: HbMatTableSortColumn;
    let fixture: ComponentFixture<HbMatTableSortColumn>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HbMatTableSortColumn]
        });
        fixture = TestBed.createComponent(HbMatTableSortColumn);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
