import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNoteRegisterComponent } from './debit-note-register.component';

describe('DebitNoteRegisterComponent', () => {
  let component: DebitNoteRegisterComponent;
  let fixture: ComponentFixture<DebitNoteRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitNoteRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitNoteRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
