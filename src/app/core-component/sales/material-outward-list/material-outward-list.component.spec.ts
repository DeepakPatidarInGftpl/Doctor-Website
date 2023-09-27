import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOutwardListComponent } from './material-outward-list.component';

describe('MaterialOutwardListComponent', () => {
  let component: MaterialOutwardListComponent;
  let fixture: ComponentFixture<MaterialOutwardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOutwardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialOutwardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
