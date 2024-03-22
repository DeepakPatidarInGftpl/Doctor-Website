import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiologistComponent } from './audiologist.component';

describe('AudiologistComponent', () => {
  let component: AudiologistComponent;
  let fixture: ComponentFixture<AudiologistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiologistComponent]
    });
    fixture = TestBed.createComponent(AudiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
