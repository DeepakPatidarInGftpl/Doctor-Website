import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenShoulderComponent } from './frozen-shoulder.component';

describe('FrozenShoulderComponent', () => {
  let component: FrozenShoulderComponent;
  let fixture: ComponentFixture<FrozenShoulderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrozenShoulderComponent]
    });
    fixture = TestBed.createComponent(FrozenShoulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
