import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsncodeWiseSaleComponent } from './hsncode-wise-sale.component';

describe('HsncodeWiseSaleComponent', () => {
  let component: HsncodeWiseSaleComponent;
  let fixture: ComponentFixture<HsncodeWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsncodeWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsncodeWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
