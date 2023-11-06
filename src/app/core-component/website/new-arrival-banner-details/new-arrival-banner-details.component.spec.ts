import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalBannerDetailsComponent } from './new-arrival-banner-details.component';

describe('NewArrivalBannerDetailsComponent', () => {
  let component: NewArrivalBannerDetailsComponent;
  let fixture: ComponentFixture<NewArrivalBannerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalBannerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
