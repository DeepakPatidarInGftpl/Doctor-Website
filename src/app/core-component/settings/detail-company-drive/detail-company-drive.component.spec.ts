import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompanyDriveComponent } from './detail-company-drive.component';

describe('DetailCompanyDriveComponent', () => {
  let component: DetailCompanyDriveComponent;
  let fixture: ComponentFixture<DetailCompanyDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompanyDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCompanyDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
