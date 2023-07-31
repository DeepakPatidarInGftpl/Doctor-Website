import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewposComponent } from './newpos.component';

describe('NewposComponent', () => {
  let component: NewposComponent;
  let fixture: ComponentFixture<NewposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
