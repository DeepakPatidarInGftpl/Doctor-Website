import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsncodedetailsComponent } from './hsncodedetails.component';

describe('HsncodedetailsComponent', () => {
  let component: HsncodedetailsComponent;
  let fixture: ComponentFixture<HsncodedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsncodedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsncodedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
