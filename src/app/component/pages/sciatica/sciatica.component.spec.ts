import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciaticaComponent } from './sciatica.component';

describe('SciaticaComponent', () => {
  let component: SciaticaComponent;
  let fixture: ComponentFixture<SciaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciaticaComponent]
    });
    fixture = TestBed.createComponent(SciaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
