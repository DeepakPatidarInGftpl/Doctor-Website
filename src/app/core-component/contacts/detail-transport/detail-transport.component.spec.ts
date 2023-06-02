import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransportComponent } from './detail-transport.component';

describe('DetailTransportComponent', () => {
  let component: DetailTransportComponent;
  let fixture: ComponentFixture<DetailTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
