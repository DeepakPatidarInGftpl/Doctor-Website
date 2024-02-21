import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialConsumptionComponent } from './update-material-consumption.component';

describe('UpdateMaterialConsumptionComponent', () => {
  let component: UpdateMaterialConsumptionComponent;
  let fixture: ComponentFixture<UpdateMaterialConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterialConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaterialConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
