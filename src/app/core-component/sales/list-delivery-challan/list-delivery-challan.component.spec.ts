import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryChallanComponent } from './list-delivery-challan.component';

describe('ListDeliveryChallanComponent', () => {
  let component: ListDeliveryChallanComponent;
  let fixture: ComponentFixture<ListDeliveryChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeliveryChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeliveryChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
