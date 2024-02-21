import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStockVerificationComponent } from './detail-stock-verification.component';

describe('DetailStockVerificationComponent', () => {
  let component: DetailStockVerificationComponent;
  let fixture: ComponentFixture<DetailStockVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStockVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStockVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
