import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapEntryListComponent } from './scrap-entry-list.component';

describe('ScrapEntryListComponent', () => {
  let component: ScrapEntryListComponent;
  let fixture: ComponentFixture<ScrapEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapEntryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
