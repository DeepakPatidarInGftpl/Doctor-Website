import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotpopupComponent } from './slotpopup.component';

describe('SlotpopupComponent', () => {
  let component: SlotpopupComponent;
  let fixture: ComponentFixture<SlotpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotpopupComponent]
    });
    fixture = TestBed.createComponent(SlotpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
