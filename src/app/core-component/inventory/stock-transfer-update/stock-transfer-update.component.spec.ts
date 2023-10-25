import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferUpdateComponent } from './stock-transfer-update.component';

describe('StockTransferUpdateComponent', () => {
  let component: StockTransferUpdateComponent;
  let fixture: ComponentFixture<StockTransferUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
