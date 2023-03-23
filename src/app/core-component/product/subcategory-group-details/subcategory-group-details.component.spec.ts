import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';

describe('SubcategoryGroupDetailsComponent', () => {
  let component: SubcategoryGroupDetailsComponent;
  let fixture: ComponentFixture<SubcategoryGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryGroupDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
