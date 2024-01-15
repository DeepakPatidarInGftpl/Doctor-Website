import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductLabelComponent } from './details-product-label.component';

describe('DetailsProductLabelComponent', () => {
  let component: DetailsProductLabelComponent;
  let fixture: ComponentFixture<DetailsProductLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProductLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProductLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
