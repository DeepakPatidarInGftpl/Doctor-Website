import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastingDashboardComponent } from './forcasting-dashboard.component';

describe('ForcastingDashboardComponent', () => {
  let component: ForcastingDashboardComponent;
  let fixture: ComponentFixture<ForcastingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcastingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
