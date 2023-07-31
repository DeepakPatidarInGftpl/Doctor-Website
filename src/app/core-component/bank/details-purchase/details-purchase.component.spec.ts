import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPurchaseComponent } from './details-purchase.component';

describe('DetailsPurchaseComponent', () => {
  let component: DetailsPurchaseComponent;
  let fixture: ComponentFixture<DetailsPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
