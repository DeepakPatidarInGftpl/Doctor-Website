import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebitnotesComponent } from './add-debitnotes.component';

describe('AddDebitnotesComponent', () => {
  let component: AddDebitnotesComponent;
  let fixture: ComponentFixture<AddDebitnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDebitnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
