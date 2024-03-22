import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KniesiotypingComponent } from './kniesiotyping.component';

describe('KniesiotypingComponent', () => {
  let component: KniesiotypingComponent;
  let fixture: ComponentFixture<KniesiotypingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KniesiotypingComponent]
    });
    fixture = TestBed.createComponent(KniesiotypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
