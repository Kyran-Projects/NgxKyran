import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKyranComponent } from './ngx-kyran.component';

describe('NgxKyranComponent', () => {
  let component: NgxKyranComponent;
  let fixture: ComponentFixture<NgxKyranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKyranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKyranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
