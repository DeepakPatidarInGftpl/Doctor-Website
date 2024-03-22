import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsthopathistComponent } from './osthopathist.component';

describe('OsthopathistComponent', () => {
  let component: OsthopathistComponent;
  let fixture: ComponentFixture<OsthopathistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsthopathistComponent]
    });
    fixture = TestBed.createComponent(OsthopathistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
