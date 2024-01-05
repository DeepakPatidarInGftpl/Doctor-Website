import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAtendanceComponent } from './details-atendance.component';

describe('DetailsAtendanceComponent', () => {
  let component: DetailsAtendanceComponent;
  let fixture: ComponentFixture<DetailsAtendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAtendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAtendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
