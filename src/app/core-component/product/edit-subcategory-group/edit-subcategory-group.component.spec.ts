import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcategoryGroupComponent } from './edit-subcategory-group.component';

describe('EditSubcategoryGroupComponent', () => {
  let component: EditSubcategoryGroupComponent;
  let fixture: ComponentFixture<EditSubcategoryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubcategoryGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubcategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
