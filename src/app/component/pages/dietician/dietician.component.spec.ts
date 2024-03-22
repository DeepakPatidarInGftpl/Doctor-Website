import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieticianComponent } from './dietician.component';

describe('DieticianComponent', () => {
  let component: DieticianComponent;
  let fixture: ComponentFixture<DieticianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DieticianComponent]
    });
    fixture = TestBed.createComponent(DieticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
