import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipedri1Component } from './pipedri1.component';

describe('Pipedri1Component', () => {
  let component: Pipedri1Component;
  let fixture: ComponentFixture<Pipedri1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipedri1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipedri1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
