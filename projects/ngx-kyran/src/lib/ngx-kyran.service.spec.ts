import { TestBed } from '@angular/core/testing';

import { NgxKyranService } from './ngx-kyran.service';

describe('NgxKyranService', () => {
  let service: NgxKyranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKyranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
