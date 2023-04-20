import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabUpdatedComponent } from './tax-slab-updated.component';

describe('TaxSlabUpdatedComponent', () => {
  let component: TaxSlabUpdatedComponent;
  let fixture: ComponentFixture<TaxSlabUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSlabUpdatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSlabUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
