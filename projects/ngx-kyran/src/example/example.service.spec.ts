import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('NgxKyranService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
