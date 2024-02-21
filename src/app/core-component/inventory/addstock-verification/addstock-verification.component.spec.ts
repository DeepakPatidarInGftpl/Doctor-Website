import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockVerificationComponent } from './addstock-verification.component';

describe('AddstockVerificationComponent', () => {
  let component: AddstockVerificationComponent;
  let fixture: ComponentFixture<AddstockVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstockVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstockVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
