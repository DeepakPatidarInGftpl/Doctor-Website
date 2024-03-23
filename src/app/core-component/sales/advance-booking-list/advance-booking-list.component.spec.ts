import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBookingListComponent } from './advance-booking-list.component';

describe('AdvanceBookingListComponent', () => {
  let component: AdvanceBookingListComponent;
  let fixture: ComponentFixture<AdvanceBookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceBookingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
