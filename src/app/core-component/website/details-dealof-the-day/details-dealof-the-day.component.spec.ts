import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDealofTheDayComponent } from './details-dealof-the-day.component';

describe('DetailsDealofTheDayComponent', () => {
  let component: DetailsDealofTheDayComponent;
  let fixture: ComponentFixture<DetailsDealofTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDealofTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDealofTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
