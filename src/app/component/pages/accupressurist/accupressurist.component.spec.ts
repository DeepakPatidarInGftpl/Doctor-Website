import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccupressuristComponent } from './accupressurist.component';

describe('AccupressuristComponent', () => {
  let component: AccupressuristComponent;
  let fixture: ComponentFixture<AccupressuristComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccupressuristComponent]
    });
    fixture = TestBed.createComponent(AccupressuristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
