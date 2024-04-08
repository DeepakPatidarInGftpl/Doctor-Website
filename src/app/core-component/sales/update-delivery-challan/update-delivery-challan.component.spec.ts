import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryChallanComponent } from './update-delivery-challan.component';

describe('UpdateDeliveryChallanComponent', () => {
  let component: UpdateDeliveryChallanComponent;
  let fixture: ComponentFixture<UpdateDeliveryChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeliveryChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeliveryChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
