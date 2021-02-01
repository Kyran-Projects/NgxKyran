import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKyranExampleComponent } from './ngxky-example.component';

describe('NgxKyranComponent', () => {
  let component: NgxKyranExampleComponent;
  let fixture: ComponentFixture<NgxKyranExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKyranExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKyranExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
