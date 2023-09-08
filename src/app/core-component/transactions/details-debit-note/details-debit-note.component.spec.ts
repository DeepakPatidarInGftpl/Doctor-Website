import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDebitNoteComponent } from './details-debit-note.component';

describe('DetailsDebitNoteComponent', () => {
  let component: DetailsDebitNoteComponent;
  let fixture: ComponentFixture<DetailsDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDebitNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
