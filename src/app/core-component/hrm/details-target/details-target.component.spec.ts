import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTargetComponent } from './details-target.component';

describe('DetailsTargetComponent', () => {
  let component: DetailsTargetComponent;
  let fixture: ComponentFixture<DetailsTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
