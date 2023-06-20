import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddealOfTheDayComponent } from './adddeal-of-the-day.component';

describe('AdddealOfTheDayComponent', () => {
  let component: AdddealOfTheDayComponent;
  let fixture: ComponentFixture<AdddealOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddealOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddealOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
