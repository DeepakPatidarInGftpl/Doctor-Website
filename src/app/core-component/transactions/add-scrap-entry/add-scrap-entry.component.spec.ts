import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrapEntryComponent } from './add-scrap-entry.component';

describe('AddScrapEntryComponent', () => {
  let component: AddScrapEntryComponent;
  let fixture: ComponentFixture<AddScrapEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScrapEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScrapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
