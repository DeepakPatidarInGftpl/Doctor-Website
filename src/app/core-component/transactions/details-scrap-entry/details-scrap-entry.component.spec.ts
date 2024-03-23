import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsScrapEntryComponent } from './details-scrap-entry.component';

describe('DetailsScrapEntryComponent', () => {
  let component: DetailsScrapEntryComponent;
  let fixture: ComponentFixture<DetailsScrapEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsScrapEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsScrapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
