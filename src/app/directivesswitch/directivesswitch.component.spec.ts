import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesswitchComponent } from './directivesswitch.component';

describe('DirectivesswitchComponent', () => {
  let component: DirectivesswitchComponent;
  let fixture: ComponentFixture<DirectivesswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
