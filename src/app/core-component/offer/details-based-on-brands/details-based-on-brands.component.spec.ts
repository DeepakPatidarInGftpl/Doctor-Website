import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBasedOnBrandsComponent } from './details-based-on-brands.component';

describe('DetailsBasedOnBrandsComponent', () => {
  let component: DetailsBasedOnBrandsComponent;
  let fixture: ComponentFixture<DetailsBasedOnBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBasedOnBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBasedOnBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
