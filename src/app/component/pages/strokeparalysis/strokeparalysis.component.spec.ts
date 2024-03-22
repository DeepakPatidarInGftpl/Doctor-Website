import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokeparalysisComponent } from './strokeparalysis.component';

describe('StrokeparalysisComponent', () => {
  let component: StrokeparalysisComponent;
  let fixture: ComponentFixture<StrokeparalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrokeparalysisComponent]
    });
    fixture = TestBed.createComponent(StrokeparalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
