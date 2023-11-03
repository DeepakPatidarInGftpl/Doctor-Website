import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionDetailsComponent } from './unit-conversion-details.component';

describe('UnitConversionDetailsComponent', () => {
  let component: UnitConversionDetailsComponent;
  let fixture: ComponentFixture<UnitConversionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitConversionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitConversionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
