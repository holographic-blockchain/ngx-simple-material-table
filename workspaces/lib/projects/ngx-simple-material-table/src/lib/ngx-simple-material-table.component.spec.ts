import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleMaterialTableComponent } from './ngx-simple-material-table.component';

describe('NgxSimpleMaterialTableComponent', () => {
  let component: NgxSimpleMaterialTableComponent;
  let fixture: ComponentFixture<NgxSimpleMaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleMaterialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSimpleMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
