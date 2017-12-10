import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBoiComponent } from './user-boi.component';

describe('UserBoiComponent', () => {
  let component: UserBoiComponent;
  let fixture: ComponentFixture<UserBoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
