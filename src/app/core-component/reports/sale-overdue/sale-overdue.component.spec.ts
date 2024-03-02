import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOverdueComponent } from './sale-overdue.component';

describe('SaleOverdueComponent', () => {
  let component: SaleOverdueComponent;
  let fixture: ComponentFixture<SaleOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOverdueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
