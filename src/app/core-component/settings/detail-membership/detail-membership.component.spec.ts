import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMembershipComponent } from './detail-membership.component';

describe('DetailMembershipComponent', () => {
  let component: DetailMembershipComponent;
  let fixture: ComponentFixture<DetailMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
