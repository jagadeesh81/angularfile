import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesifComponent } from './directivesif.component';

describe('DirectivesifComponent', () => {
  let component: DirectivesifComponent;
  let fixture: ComponentFixture<DirectivesifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
