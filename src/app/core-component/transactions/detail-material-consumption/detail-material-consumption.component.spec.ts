import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMaterialConsumptionComponent } from './detail-material-consumption.component';

describe('DetailMaterialConsumptionComponent', () => {
  let component: DetailMaterialConsumptionComponent;
  let fixture: ComponentFixture<DetailMaterialConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMaterialConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMaterialConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
