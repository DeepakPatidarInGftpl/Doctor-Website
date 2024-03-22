import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasertherapyComponent } from './lasertherapy.component';

describe('LasertherapyComponent', () => {
  let component: LasertherapyComponent;
  let fixture: ComponentFixture<LasertherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LasertherapyComponent]
    });
    fixture = TestBed.createComponent(LasertherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
