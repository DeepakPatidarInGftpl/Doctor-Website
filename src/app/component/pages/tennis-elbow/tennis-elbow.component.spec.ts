import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisElbowComponent } from './tennis-elbow.component';

describe('TennisElbowComponent', () => {
  let component: TennisElbowComponent;
  let fixture: ComponentFixture<TennisElbowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TennisElbowComponent]
    });
    fixture = TestBed.createComponent(TennisElbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
