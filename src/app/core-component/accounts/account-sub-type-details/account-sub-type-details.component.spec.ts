import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSubTypeDetailsComponent } from './account-sub-type-details.component';

describe('AccountSubTypeDetailsComponent', () => {
  let component: AccountSubTypeDetailsComponent;
  let fixture: ComponentFixture<AccountSubTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSubTypeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSubTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
