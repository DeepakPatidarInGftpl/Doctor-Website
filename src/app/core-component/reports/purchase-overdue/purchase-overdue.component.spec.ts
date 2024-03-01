import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOverdueComponent } from './purchase-overdue.component';

describe('PurchaseOverdueComponent', () => {
  let component: PurchaseOverdueComponent;
  let fixture: ComponentFixture<PurchaseOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOverdueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
