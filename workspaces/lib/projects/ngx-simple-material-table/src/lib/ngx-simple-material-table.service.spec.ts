import { TestBed } from '@angular/core/testing';

import { NgxSimpleMaterialTableService } from './ngx-simple-material-table.service';

describe('NgxSimpleMaterialTableService', () => {
  let service: NgxSimpleMaterialTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleMaterialTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
