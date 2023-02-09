import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbMatTableColumn } from './hb-mat-table-column.component';

describe('HbMatTableColumn', () => {
    let component: HbMatTableColumn;
    let fixture: ComponentFixture<HbMatTableColumn>;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [HbMatTableColumn]
            })
            .compileComponents();

        fixture = TestBed.createComponent(HbMatTableColumn);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
