import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisInventoryListComponent } from './analysis-inventory-list.component';

describe('AnalysisInventoryListComponent', () => {
  let component: AnalysisInventoryListComponent;
  let fixture: ComponentFixture<AnalysisInventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisInventoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
