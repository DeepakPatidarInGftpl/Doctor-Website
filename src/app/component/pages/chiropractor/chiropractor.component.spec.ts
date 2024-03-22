import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropractorComponent } from './chiropractor.component';

describe('ChiropractorComponent', () => {
  let component: ChiropractorComponent;
  let fixture: ComponentFixture<ChiropractorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiropractorComponent]
    });
    fixture = TestBed.createComponent(ChiropractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
