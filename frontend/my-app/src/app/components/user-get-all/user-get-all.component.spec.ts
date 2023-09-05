import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetAllComponent } from './user-get-all.component';

describe('UserGetAllComponent', () => {
  let component: UserGetAllComponent;
  let fixture: ComponentFixture<UserGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGetAllComponent]
    });
    fixture = TestBed.createComponent(UserGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
