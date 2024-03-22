import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsthesisComponent } from './prosthesis.component';

describe('ProsthesisComponent', () => {
  let component: ProsthesisComponent;
  let fixture: ComponentFixture<ProsthesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsthesisComponent]
    });
    fixture = TestBed.createComponent(ProsthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
