import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdvanceBookingComponent } from './detail-advance-booking.component';

describe('DetailAdvanceBookingComponent', () => {
  let component: DetailAdvanceBookingComponent;
  let fixture: ComponentFixture<DetailAdvanceBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAdvanceBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAdvanceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
