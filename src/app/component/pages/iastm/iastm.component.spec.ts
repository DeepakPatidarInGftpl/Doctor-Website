import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IastmComponent } from './iastm.component';

describe('IastmComponent', () => {
  let component: IastmComponent;
  let fixture: ComponentFixture<IastmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IastmComponent]
    });
    fixture = TestBed.createComponent(IastmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
