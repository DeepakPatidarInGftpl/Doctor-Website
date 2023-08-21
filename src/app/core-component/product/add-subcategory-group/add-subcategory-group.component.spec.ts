import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryGroupComponent } from './add-subcategory-group.component';

describe('AddSubcategoryGroupComponent', () => {
  let component: AddSubcategoryGroupComponent;
  let fixture: ComponentFixture<AddSubcategoryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubcategoryGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubcategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
