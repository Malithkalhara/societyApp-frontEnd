import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersocComponent } from './footersoc.component';

describe('FootersocComponent', () => {
  let component: FootersocComponent;
  let fixture: ComponentFixture<FootersocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
