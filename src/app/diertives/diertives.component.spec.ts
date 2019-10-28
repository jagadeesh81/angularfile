import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiertivesComponent } from './diertives.component';

describe('DiertivesComponent', () => {
  let component: DiertivesComponent;
  let fixture: ComponentFixture<DiertivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiertivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiertivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
