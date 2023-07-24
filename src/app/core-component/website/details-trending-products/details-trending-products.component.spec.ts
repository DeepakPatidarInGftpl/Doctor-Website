import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrendingProductsComponent } from './details-trending-products.component';

describe('DetailsTrendingProductsComponent', () => {
  let component: DetailsTrendingProductsComponent;
  let fixture: ComponentFixture<DetailsTrendingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTrendingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTrendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
