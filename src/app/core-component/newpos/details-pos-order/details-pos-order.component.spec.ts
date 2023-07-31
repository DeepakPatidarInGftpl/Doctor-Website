import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPosOrderComponent } from './details-pos-order.component';

describe('DetailsPosOrderComponent', () => {
  let component: DetailsPosOrderComponent;
  let fixture: ComponentFixture<DetailsPosOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPosOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPosOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
