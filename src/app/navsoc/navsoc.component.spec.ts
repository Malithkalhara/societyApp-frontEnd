import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsocComponent } from './navsoc.component';

describe('NavsocComponent', () => {
  let component: NavsocComponent;
  let fixture: ComponentFixture<NavsocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
