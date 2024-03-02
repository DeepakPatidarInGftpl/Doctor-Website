import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWiseDebitNoteComponent } from './tax-wise-debit-note.component';

describe('TaxWiseDebitNoteComponent', () => {
  let component: TaxWiseDebitNoteComponent;
  let fixture: ComponentFixture<TaxWiseDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWiseDebitNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWiseDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
