import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFeatureDetailsComponent } from './footer-feature-details.component';

describe('FooterFeatureDetailsComponent', () => {
  let component: FooterFeatureDetailsComponent;
  let fixture: ComponentFixture<FooterFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFeatureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
