import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdvanceBookingComponent } from './update-advance-booking.component';

describe('UpdateAdvanceBookingComponent', () => {
  let component: UpdateAdvanceBookingComponent;
  let fixture: ComponentFixture<UpdateAdvanceBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdvanceBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdvanceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
