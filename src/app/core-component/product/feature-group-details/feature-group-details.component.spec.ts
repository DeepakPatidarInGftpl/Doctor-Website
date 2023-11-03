import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupDetailsComponent } from './feature-group-details.component';

describe('FeatureGroupDetailsComponent', () => {
  let component: FeatureGroupDetailsComponent;
  let fixture: ComponentFixture<FeatureGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureGroupDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
