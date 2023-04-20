import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabDetailComponent } from './tax-slab-detail.component';

describe('TaxSlabDetailComponent', () => {
  let component: TaxSlabDetailComponent;
  let fixture: ComponentFixture<TaxSlabDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSlabDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSlabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
