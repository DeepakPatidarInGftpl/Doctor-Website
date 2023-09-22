import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSalesReturnComponent } from './details-sales-return.component';

describe('DetailsSalesReturnComponent', () => {
  let component: DetailsSalesReturnComponent;
  let fixture: ComponentFixture<DetailsSalesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSalesReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSalesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
