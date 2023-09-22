import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialOutwardComponent } from './update-material-outward.component';

describe('UpdateMaterialOutwardComponent', () => {
  let component: UpdateMaterialOutwardComponent;
  let fixture: ComponentFixture<UpdateMaterialOutwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterialOutwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaterialOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
