import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalBannerComponent } from './new-arrival-banner.component';

describe('NewArrivalBannerComponent', () => {
  let component: NewArrivalBannerComponent;
  let fixture: ComponentFixture<NewArrivalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
