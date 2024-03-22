import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFitnessTrainerComponent } from './gym-fitness-trainer.component';

describe('GymFitnessTrainerComponent', () => {
  let component: GymFitnessTrainerComponent;
  let fixture: ComponentFixture<GymFitnessTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymFitnessTrainerComponent]
    });
    fixture = TestBed.createComponent(GymFitnessTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
