import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEstimateComponent } from './details-estimate.component';

describe('DetailsEstimateComponent', () => {
  let component: DetailsEstimateComponent;
  let fixture: ComponentFixture<DetailsEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
