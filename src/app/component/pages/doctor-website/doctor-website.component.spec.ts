import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorWebsiteComponent } from './doctor-website.component';

describe('DoctorWebsiteComponent', () => {
  let component: DoctorWebsiteComponent;
  let fixture: ComponentFixture<DoctorWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorWebsiteComponent]
    });
    fixture = TestBed.createComponent(DoctorWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
