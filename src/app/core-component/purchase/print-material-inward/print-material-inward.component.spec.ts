import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMaterialInwardComponent } from './print-material-inward.component';

describe('PrintMaterialInwardComponent', () => {
  let component: PrintMaterialInwardComponent;
  let fixture: ComponentFixture<PrintMaterialInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMaterialInwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintMaterialInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
