import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBannerDetailsComponent } from './about-banner-details.component';

describe('AboutBannerDetailsComponent', () => {
  let component: AboutBannerDetailsComponent;
  let fixture: ComponentFixture<AboutBannerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBannerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
