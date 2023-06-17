import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchaseBillComponent } from './addpurchase-bill.component';

describe('AddpurchaseBillComponent', () => {
  let component: AddpurchaseBillComponent;
  let fixture: ComponentFixture<AddpurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpurchaseBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
