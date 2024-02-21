import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockTransferRequestComponent } from './add-stock-transfer-request.component';

describe('AddStockTransferRequestComponent', () => {
  let component: AddStockTransferRequestComponent;
  let fixture: ComponentFixture<AddStockTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockTransferRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
