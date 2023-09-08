import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBillListComponent } from './sale-bill-list.component';

describe('SaleBillListComponent', () => {
  let component: SaleBillListComponent;
  let fixture: ComponentFixture<SaleBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
