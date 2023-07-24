import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDebitnotesComponent } from './update-debitnotes.component';

describe('UpdateDebitnotesComponent', () => {
  let component: UpdateDebitnotesComponent;
  let fixture: ComponentFixture<UpdateDebitnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDebitnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
