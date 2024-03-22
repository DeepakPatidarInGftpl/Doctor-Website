import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrotherapyComponent } from './hydrotherapy.component';

describe('HydrotherapyComponent', () => {
  let component: HydrotherapyComponent;
  let fixture: ComponentFixture<HydrotherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HydrotherapyComponent]
    });
    fixture = TestBed.createComponent(HydrotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
