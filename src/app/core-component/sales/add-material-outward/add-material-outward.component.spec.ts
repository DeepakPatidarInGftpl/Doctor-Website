import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialOutwardComponent } from './add-material-outward.component';

describe('AddMaterialOutwardComponent', () => {
  let component: AddMaterialOutwardComponent;
  let fixture: ComponentFixture<AddMaterialOutwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialOutwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaterialOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
