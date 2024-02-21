import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialConsumptionComponent } from './add-material-consumption.component';

describe('AddMaterialConsumptionComponent', () => {
  let component: AddMaterialConsumptionComponent;
  let fixture: ComponentFixture<AddMaterialConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaterialConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
