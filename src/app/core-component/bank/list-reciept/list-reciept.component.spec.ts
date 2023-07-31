import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecieptComponent } from './list-reciept.component';

describe('ListRecieptComponent', () => {
  let component: ListRecieptComponent;
  let fixture: ComponentFixture<ListRecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecieptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
