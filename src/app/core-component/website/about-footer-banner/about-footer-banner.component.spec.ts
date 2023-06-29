import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFooterBannerComponent } from './about-footer-banner.component';

describe('AboutFooterBannerComponent', () => {
  let component: AboutFooterBannerComponent;
  let fixture: ComponentFixture<AboutFooterBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFooterBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFooterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
