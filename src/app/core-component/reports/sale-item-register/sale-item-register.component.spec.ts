import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemRegisterComponent } from './sale-item-register.component';

describe('SaleItemRegisterComponent', () => {
  let component: SaleItemRegisterComponent;
  let fixture: ComponentFixture<SaleItemRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleItemRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleItemRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
