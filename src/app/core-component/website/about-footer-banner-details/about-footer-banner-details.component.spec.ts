import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFooterBannerDetailsComponent } from './about-footer-banner-details.component';

describe('AboutFooterBannerDetailsComponent', () => {
  let component: AboutFooterBannerDetailsComponent;
  let fixture: ComponentFixture<AboutFooterBannerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFooterBannerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFooterBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
