import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBasedOnBrandsSubCategoryComponent } from './details-based-on-brands-sub-category.component';

describe('DetailsBasedOnBrandsSubCategoryComponent', () => {
  let component: DetailsBasedOnBrandsSubCategoryComponent;
  let fixture: ComponentFixture<DetailsBasedOnBrandsSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBasedOnBrandsSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBasedOnBrandsSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
