import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbMatTable } from './hb-mat-table.component';

describe('HbMatTable', () => {
    let component: HbMatTable;
    let fixture: ComponentFixture<HbMatTable>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HbMatTable]
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
