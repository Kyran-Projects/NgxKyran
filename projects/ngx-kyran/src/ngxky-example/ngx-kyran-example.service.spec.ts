import { TestBed } from '@angular/core/testing';

import { NgxKyExampleService } from './ngxky-example.service';

describe('NgxKyranService', () => {
  let service: NgxKyExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKyExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
