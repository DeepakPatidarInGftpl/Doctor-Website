import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorydetailsComponent } from './subcategorydetails.component';

describe('SubcategorydetailsComponent', () => {
  let component: SubcategorydetailsComponent;
  let fixture: ComponentFixture<SubcategorydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategorydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
