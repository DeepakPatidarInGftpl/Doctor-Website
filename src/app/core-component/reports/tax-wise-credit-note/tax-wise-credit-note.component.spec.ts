import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWiseCreditNoteComponent } from './tax-wise-credit-note.component';

describe('TaxWiseCreditNoteComponent', () => {
  let component: TaxWiseCreditNoteComponent;
  let fixture: ComponentFixture<TaxWiseCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWiseCreditNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWiseCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
