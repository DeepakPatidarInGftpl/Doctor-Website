import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalChargeDetailsComponent } from './additional-charge-details.component';

describe('AdditionalChargeDetailsComponent', () => {
  let component: AdditionalChargeDetailsComponent;
  let fixture: ComponentFixture<AdditionalChargeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalChargeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalChargeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
