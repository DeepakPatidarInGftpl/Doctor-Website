import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePainComponent } from './knee-pain.component';

describe('KneePainComponent', () => {
  let component: KneePainComponent;
  let fixture: ComponentFixture<KneePainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KneePainComponent]
    });
    fixture = TestBed.createComponent(KneePainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
