import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsncodeWisePurchaseComponent } from './hsncode-wise-purchase.component';

describe('HsncodeWisePurchaseComponent', () => {
  let component: HsncodeWisePurchaseComponent;
  let fixture: ComponentFixture<HsncodeWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsncodeWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsncodeWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
