import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepurchaseBillComponent } from './updatepurchase-bill.component';

describe('UpdatepurchaseBillComponent', () => {
  let component: UpdatepurchaseBillComponent;
  let fixture: ComponentFixture<UpdatepurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepurchaseBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
