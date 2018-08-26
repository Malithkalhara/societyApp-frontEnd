import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsocComponent } from './addsoc.component';

describe('AddsocComponent', () => {
  let component: AddsocComponent;
  let fixture: ComponentFixture<AddsocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
