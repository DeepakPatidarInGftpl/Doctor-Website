import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipdiskComponent } from './slipdisk.component';

describe('SlipdiskComponent', () => {
  let component: SlipdiskComponent;
  let fixture: ComponentFixture<SlipdiskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlipdiskComponent]
    });
    fixture = TestBed.createComponent(SlipdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
