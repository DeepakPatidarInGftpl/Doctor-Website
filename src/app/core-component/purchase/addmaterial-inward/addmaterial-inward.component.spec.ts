import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaterialInwardComponent } from './addmaterial-inward.component';

describe('AddmaterialInwardComponent', () => {
  let component: AddmaterialInwardComponent;
  let fixture: ComponentFixture<AddmaterialInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaterialInwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmaterialInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
