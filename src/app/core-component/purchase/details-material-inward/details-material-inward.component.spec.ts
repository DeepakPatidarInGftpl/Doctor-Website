import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaterialInwardComponent } from './details-material-inward.component';

describe('DetailsMaterialInwardComponent', () => {
  let component: DetailsMaterialInwardComponent;
  let fixture: ComponentFixture<DetailsMaterialInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMaterialInwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMaterialInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
