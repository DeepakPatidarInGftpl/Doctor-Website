import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialYearDetailsComponent } from './financial-year-details.component';

describe('FinancialYearDetailsComponent', () => {
  let component: FinancialYearDetailsComponent;
  let fixture: ComponentFixture<FinancialYearDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialYearDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialYearDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
