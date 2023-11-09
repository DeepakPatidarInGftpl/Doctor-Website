import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExpenceComponent } from './details-expence.component';

describe('DetailsExpenceComponent', () => {
  let component: DetailsExpenceComponent;
  let fixture: ComponentFixture<DetailsExpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsExpenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsExpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
