import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSaleOrderComponent } from './pending-sale-order.component';

describe('PendingSaleOrderComponent', () => {
  let component: PendingSaleOrderComponent;
  let fixture: ComponentFixture<PendingSaleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSaleOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingSaleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
