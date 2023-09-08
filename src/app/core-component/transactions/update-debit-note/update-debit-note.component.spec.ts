import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDebitNoteComponent } from './update-debit-note.component';

describe('UpdateDebitNoteComponent', () => {
  let component: UpdateDebitNoteComponent;
  let fixture: ComponentFixture<UpdateDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDebitNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
