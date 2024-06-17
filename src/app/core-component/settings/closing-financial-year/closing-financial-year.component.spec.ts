import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingFinancialYearComponent } from './closing-financial-year.component';

describe('ClosingFinancialYearComponent', () => {
  let component: ClosingFinancialYearComponent;
  let fixture: ComponentFixture<ClosingFinancialYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosingFinancialYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosingFinancialYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
