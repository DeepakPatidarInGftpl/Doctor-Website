import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompanyBankComponent } from './details-company-bank.component';

describe('DetailsCompanyBankComponent', () => {
  let component: DetailsCompanyBankComponent;
  let fixture: ComponentFixture<DetailsCompanyBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCompanyBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCompanyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
