import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyBankComponent } from './update-company-bank.component';

describe('UpdateCompanyBankComponent', () => {
  let component: UpdateCompanyBankComponent;
  let fixture: ComponentFixture<UpdateCompanyBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompanyBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCompanyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
