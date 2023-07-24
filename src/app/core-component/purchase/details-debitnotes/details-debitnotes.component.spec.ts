import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDebitnotesComponent } from './details-debitnotes.component';

describe('DetailsDebitnotesComponent', () => {
  let component: DetailsDebitnotesComponent;
  let fixture: ComponentFixture<DetailsDebitnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDebitnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
