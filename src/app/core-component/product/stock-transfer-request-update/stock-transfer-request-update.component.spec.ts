import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferRequestUpdateComponent } from './stock-transfer-request-update.component';

describe('StockTransferRequestUpdateComponent', () => {
  let component: StockTransferRequestUpdateComponent;
  let fixture: ComponentFixture<StockTransferRequestUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferRequestUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
