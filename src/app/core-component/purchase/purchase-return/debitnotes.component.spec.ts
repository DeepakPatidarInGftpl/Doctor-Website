import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitnotesComponent } from './debitnotes.component';

describe('DebitnotesComponent', () => {
  let component: DebitnotesComponent;
  let fixture: ComponentFixture<DebitnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
