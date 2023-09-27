import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaterialOutwardComponent } from './details-material-outward.component';

describe('DetailsMaterialOutwardComponent', () => {
  let component: DetailsMaterialOutwardComponent;
  let fixture: ComponentFixture<DetailsMaterialOutwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMaterialOutwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMaterialOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
