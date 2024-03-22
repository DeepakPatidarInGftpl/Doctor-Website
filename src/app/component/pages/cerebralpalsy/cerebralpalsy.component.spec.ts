import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebralpalsyComponent } from './cerebralpalsy.component';

describe('CerebralpalsyComponent', () => {
  let component: CerebralpalsyComponent;
  let fixture: ComponentFixture<CerebralpalsyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerebralpalsyComponent]
    });
    fixture = TestBed.createComponent(CerebralpalsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
