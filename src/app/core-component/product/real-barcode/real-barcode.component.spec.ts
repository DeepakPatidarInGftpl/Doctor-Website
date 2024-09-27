import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealBarcodeComponent } from './real-barcode.component';

describe('RealBarcodeComponent', () => {
  let component: RealBarcodeComponent;
  let fixture: ComponentFixture<RealBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealBarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
