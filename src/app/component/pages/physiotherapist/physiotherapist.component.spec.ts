import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapistComponent } from './physiotherapist.component';

describe('PhysiotherapistComponent', () => {
  let component: PhysiotherapistComponent;
  let fixture: ComponentFixture<PhysiotherapistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysiotherapistComponent]
    });
    fixture = TestBed.createComponent(PhysiotherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
