import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTherapistComponent } from './special-therapist.component';

describe('SpecialTherapistComponent', () => {
  let component: SpecialTherapistComponent;
  let fixture: ComponentFixture<SpecialTherapistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialTherapistComponent]
    });
    fixture = TestBed.createComponent(SpecialTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
