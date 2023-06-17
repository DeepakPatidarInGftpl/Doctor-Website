import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspurchaseBillComponent } from './detailspurchase-bill.component';

describe('DetailspurchaseBillComponent', () => {
  let component: DetailspurchaseBillComponent;
  let fixture: ComponentFixture<DetailspurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspurchaseBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailspurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
