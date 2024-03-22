import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpainComponent } from './backpain.component';

describe('BackpainComponent', () => {
  let component: BackpainComponent;
  let fixture: ComponentFixture<BackpainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackpainComponent]
    });
    fixture = TestBed.createComponent(BackpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
