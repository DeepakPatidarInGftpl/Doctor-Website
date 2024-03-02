import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalBookComponent } from './journal-book.component';

describe('JournalBookComponent', () => {
  let component: JournalBookComponent;
  let fixture: ComponentFixture<JournalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
