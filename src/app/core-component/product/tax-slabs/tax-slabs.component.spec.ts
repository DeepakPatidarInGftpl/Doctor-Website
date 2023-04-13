import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabsComponent } from './tax-slabs.component';

describe('TaxSlabsComponent', () => {
  let component: TaxSlabsComponent;
  let fixture: ComponentFixture<TaxSlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSlabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
