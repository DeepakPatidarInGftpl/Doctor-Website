import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferRequestDetailsComponent } from './stock-transfer-request-details.component';

describe('StockTransferRequestDetailsComponent', () => {
  let component: StockTransferRequestDetailsComponent;
  let fixture: ComponentFixture<StockTransferRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
