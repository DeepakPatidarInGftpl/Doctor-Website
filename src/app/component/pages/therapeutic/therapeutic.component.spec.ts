import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuticComponent } from './therapeutic.component';

describe('TherapeuticComponent', () => {
  let component: TherapeuticComponent;
  let fixture: ComponentFixture<TherapeuticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapeuticComponent]
    });
    fixture = TestBed.createComponent(TherapeuticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
