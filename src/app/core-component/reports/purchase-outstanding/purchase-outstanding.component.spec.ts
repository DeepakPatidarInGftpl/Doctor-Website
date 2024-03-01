import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOutstandingComponent } from './purchase-outstanding.component';

describe('PurchaseOutstandingComponent', () => {
  let component: PurchaseOutstandingComponent;
  let fixture: ComponentFixture<PurchaseOutstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOutstandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
