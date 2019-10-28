import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledirectivesComponent } from './styledirectives.component';

describe('StyledirectivesComponent', () => {
  let component: StyledirectivesComponent;
  let fixture: ComponentFixture<StyledirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
