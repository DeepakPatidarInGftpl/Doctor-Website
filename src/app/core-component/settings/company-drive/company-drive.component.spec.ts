import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDriveComponent } from './company-drive.component';

describe('CompanyDriveComponent', () => {
  let component: CompanyDriveComponent;
  let fixture: ComponentFixture<CompanyDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
