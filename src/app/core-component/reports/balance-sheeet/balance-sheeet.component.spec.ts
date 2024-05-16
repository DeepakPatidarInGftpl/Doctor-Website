import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheeetComponent } from './balance-sheeet.component';

describe('BalanceSheeetComponent', () => {
  let component: BalanceSheeetComponent;
  let fixture: ComponentFixture<BalanceSheeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceSheeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSheeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
