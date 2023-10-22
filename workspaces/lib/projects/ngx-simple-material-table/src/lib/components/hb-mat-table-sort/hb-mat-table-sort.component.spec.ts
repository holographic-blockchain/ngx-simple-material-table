import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbMatTableSort } from './hb-mat-table-sort.component';

describe('HbMatTableSort', () => {
    let component: HbMatTableSort;
    let fixture: ComponentFixture<HbMatTableSort>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HbMatTableSort]
        });
        fixture = TestBed.createComponent(HbMatTableSort);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
