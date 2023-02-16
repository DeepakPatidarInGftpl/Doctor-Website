import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryGroupComponent } from './subcategory-group.component';

describe('SubcategoryGroupComponent', () => {
  let component: SubcategoryGroupComponent;
  let fixture: ComponentFixture<SubcategoryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
