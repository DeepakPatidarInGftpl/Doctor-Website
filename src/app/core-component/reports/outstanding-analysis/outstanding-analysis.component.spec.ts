import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingAnalysisComponent } from './outstanding-analysis.component';

describe('OutstandingAnalysisComponent', () => {
  let component: OutstandingAnalysisComponent;
  let fixture: ComponentFixture<OutstandingAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
