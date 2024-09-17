import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChartDetailsComponent } from './size-chart-details.component';

describe('SizeChartDetailsComponent', () => {
  let component: SizeChartDetailsComponent;
  let fixture: ComponentFixture<SizeChartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeChartDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeChartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
