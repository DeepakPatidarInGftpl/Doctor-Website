import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStaticPageComponent } from './update-static-page.component';

describe('UpdateStaticPageComponent', () => {
  let component: UpdateStaticPageComponent;
  let fixture: ComponentFixture<UpdateStaticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStaticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStaticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
