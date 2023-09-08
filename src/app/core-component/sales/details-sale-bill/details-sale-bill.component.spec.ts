import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSaleBillComponent } from './details-sale-bill.component';

describe('DetailsSaleBillComponent', () => {
  let component: DetailsSaleBillComponent;
  let fixture: ComponentFixture<DetailsSaleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSaleBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSaleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
