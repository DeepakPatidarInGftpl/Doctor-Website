import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNoteRegisterComponent } from './credit-note-register.component';

describe('CreditNoteRegisterComponent', () => {
  let component: CreditNoteRegisterComponent;
  let fixture: ComponentFixture<CreditNoteRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditNoteRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditNoteRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
