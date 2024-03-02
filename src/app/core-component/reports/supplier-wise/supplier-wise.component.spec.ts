import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWiseComponent } from './supplier-wise.component';

describe('SupplierWiseComponent', () => {
  let component: SupplierWiseComponent;
  let fixture: ComponentFixture<SupplierWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
