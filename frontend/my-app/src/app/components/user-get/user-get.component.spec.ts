import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetComponent } from './user-get.component';

describe('UserGetComponent', () => {
  let component: UserGetComponent;
  let fixture: ComponentFixture<UserGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGetComponent]
    });
    fixture = TestBed.createComponent(UserGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
