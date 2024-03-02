import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandWiseSaleComponent } from './brand-wise-sale.component';

describe('BrandWiseSaleComponent', () => {
  let component: BrandWiseSaleComponent;
  let fixture: ComponentFixture<BrandWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
