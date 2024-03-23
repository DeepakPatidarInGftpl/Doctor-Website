import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvanceBookingComponent } from './add-advance-booking.component';

describe('AddAdvanceBookingComponent', () => {
  let component: AddAdvanceBookingComponent;
  let fixture: ComponentFixture<AddAdvanceBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvanceBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvanceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
