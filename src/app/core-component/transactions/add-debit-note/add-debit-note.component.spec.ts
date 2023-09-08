import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebitNoteComponent } from './add-debit-note.component';

describe('AddDebitNoteComponent', () => {
  let component: AddDebitNoteComponent;
  let fixture: ComponentFixture<AddDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDebitNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
