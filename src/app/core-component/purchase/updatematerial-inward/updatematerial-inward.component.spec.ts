import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatematerialInwardComponent } from './updatematerial-inward.component';

describe('UpdatematerialInwardComponent', () => {
  let component: UpdatematerialInwardComponent;
  let fixture: ComponentFixture<UpdatematerialInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatematerialInwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatematerialInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
