import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWiseSaleComponent } from './time-wise-sale.component';

describe('TimeWiseSaleComponent', () => {
  let component: TimeWiseSaleComponent;
  let fixture: ComponentFixture<TimeWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
