import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferRequestListComponent } from './stock-transfer-request-list.component';

describe('StockTransferRequestListComponent', () => {
  let component: StockTransferRequestListComponent;
  let fixture: ComponentFixture<StockTransferRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
