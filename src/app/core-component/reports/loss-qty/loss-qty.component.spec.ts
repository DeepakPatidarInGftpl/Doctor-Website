import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossQtyComponent } from './loss-qty.component';

describe('LossQtyComponent', () => {
  let component: LossQtyComponent;
  let fixture: ComponentFixture<LossQtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LossQtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LossQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
