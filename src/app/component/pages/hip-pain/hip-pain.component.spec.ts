import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipPainComponent } from './hip-pain.component';

describe('HipPainComponent', () => {
  let component: HipPainComponent;
  let fixture: ComponentFixture<HipPainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HipPainComponent]
    });
    fixture = TestBed.createComponent(HipPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
