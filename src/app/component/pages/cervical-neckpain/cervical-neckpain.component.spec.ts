import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervicalNeckpainComponent } from './cervical-neckpain.component';

describe('CervicalNeckpainComponent', () => {
  let component: CervicalNeckpainComponent;
  let fixture: ComponentFixture<CervicalNeckpainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CervicalNeckpainComponent]
    });
    fixture = TestBed.createComponent(CervicalNeckpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
