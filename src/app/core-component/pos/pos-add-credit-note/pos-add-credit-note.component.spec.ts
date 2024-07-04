import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAddCreditNoteComponent } from './pos-add-credit-note.component';

describe('PosAddCreditNoteComponent', () => {
  let component: PosAddCreditNoteComponent;
  let fixture: ComponentFixture<PosAddCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosAddCreditNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAddCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
