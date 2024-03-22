import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TREATComponent } from './treat.component';

describe('TREATComponent', () => {
  let component: TREATComponent;
  let fixture: ComponentFixture<TREATComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TREATComponent]
    });
    fixture = TestBed.createComponent(TREATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
