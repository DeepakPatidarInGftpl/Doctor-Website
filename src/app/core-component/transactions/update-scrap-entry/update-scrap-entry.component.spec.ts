import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScrapEntryComponent } from './update-scrap-entry.component';

describe('UpdateScrapEntryComponent', () => {
  let component: UpdateScrapEntryComponent;
  let fixture: ComponentFixture<UpdateScrapEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScrapEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateScrapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
