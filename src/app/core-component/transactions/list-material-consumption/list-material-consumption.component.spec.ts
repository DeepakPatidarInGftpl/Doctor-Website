import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialConsumptionComponent } from './list-material-consumption.component';

describe('ListMaterialConsumptionComponent', () => {
  let component: ListMaterialConsumptionComponent;
  let fixture: ComponentFixture<ListMaterialConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMaterialConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMaterialConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
