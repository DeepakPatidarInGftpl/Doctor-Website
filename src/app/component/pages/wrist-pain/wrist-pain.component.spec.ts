import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WristPainComponent } from './wrist-pain.component';

describe('WristPainComponent', () => {
  let component: WristPainComponent;
  let fixture: ComponentFixture<WristPainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WristPainComponent]
    });
    fixture = TestBed.createComponent(WristPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
