import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryneedlingComponent } from './dryneedling.component';

describe('DryneedlingComponent', () => {
  let component: DryneedlingComponent;
  let fixture: ComponentFixture<DryneedlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryneedlingComponent]
    });
    fixture = TestBed.createComponent(DryneedlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
