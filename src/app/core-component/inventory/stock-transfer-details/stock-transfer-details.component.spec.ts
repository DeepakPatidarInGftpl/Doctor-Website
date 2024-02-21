import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferDetailsComponent } from './stock-transfer-details.component';

describe('StockTransferDetailsComponent', () => {
  let component: StockTransferDetailsComponent;
  let fixture: ComponentFixture<StockTransferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
