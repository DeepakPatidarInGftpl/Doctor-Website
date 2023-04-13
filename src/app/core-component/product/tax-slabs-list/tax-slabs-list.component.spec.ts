import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabsListComponent } from './tax-slabs-list.component';

describe('TaxSlabsListComponent', () => {
  let component: TaxSlabsListComponent;
  let fixture: ComponentFixture<TaxSlabsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSlabsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSlabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
