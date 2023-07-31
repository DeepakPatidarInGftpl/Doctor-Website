import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecieptComponent } from './details-reciept.component';

describe('DetailsRecieptComponent', () => {
  let component: DetailsRecieptComponent;
  let fixture: ComponentFixture<DetailsRecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRecieptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
