import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsocComponent } from './aboutsoc.component';

describe('AboutsocComponent', () => {
  let component: AboutsocComponent;
  let fixture: ComponentFixture<AboutsocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutsocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
