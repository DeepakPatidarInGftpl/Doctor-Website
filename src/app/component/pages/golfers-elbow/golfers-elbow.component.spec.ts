import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfersElbowComponent } from './golfers-elbow.component';

describe('GolfersElbowComponent', () => {
  let component: GolfersElbowComponent;
  let fixture: ComponentFixture<GolfersElbowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfersElbowComponent]
    });
    fixture = TestBed.createComponent(GolfersElbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
