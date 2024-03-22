import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsInjuryComponent } from './sports-injury.component';

describe('SportsInjuryComponent', () => {
  let component: SportsInjuryComponent;
  let fixture: ComponentFixture<SportsInjuryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsInjuryComponent]
    });
    fixture = TestBed.createComponent(SportsInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
