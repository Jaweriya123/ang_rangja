import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListSliderComponent } from './group-list-slider.component';

describe('GroupListSliderComponent', () => {
  let component: GroupListSliderComponent;
  let fixture: ComponentFixture<GroupListSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupListSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
