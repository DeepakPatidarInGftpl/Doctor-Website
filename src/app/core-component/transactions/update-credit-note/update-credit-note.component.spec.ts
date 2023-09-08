import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreditNoteComponent } from './update-credit-note.component';

describe('UpdateCreditNoteComponent', () => {
  let component: UpdateCreditNoteComponent;
  let fixture: ComponentFixture<UpdateCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCreditNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
