import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetGraphComponent } from './target-graph.component';

describe('TargetGraphComponent', () => {
  let component: TargetGraphComponent;
  let fixture: ComponentFixture<TargetGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
