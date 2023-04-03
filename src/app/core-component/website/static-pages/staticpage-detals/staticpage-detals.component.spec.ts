import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticpageDetalsComponent } from './staticpage-detals.component';

describe('StaticpageDetalsComponent', () => {
  let component: StaticpageDetalsComponent;
  let fixture: ComponentFixture<StaticpageDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticpageDetalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticpageDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
