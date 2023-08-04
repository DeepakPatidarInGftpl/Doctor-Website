import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePermissionGroupComponent } from './update-permission-group.component';

describe('UpdatePermissionGroupComponent', () => {
  let component: UpdatePermissionGroupComponent;
  let fixture: ComponentFixture<UpdatePermissionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePermissionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePermissionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
