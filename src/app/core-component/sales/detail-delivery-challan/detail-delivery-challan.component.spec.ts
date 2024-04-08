import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeliveryChallanComponent } from './detail-delivery-challan.component';

describe('DetailDeliveryChallanComponent', () => {
  let component: DetailDeliveryChallanComponent;
  let fixture: ComponentFixture<DetailDeliveryChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDeliveryChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDeliveryChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
