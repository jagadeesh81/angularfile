import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireativecreationComponent } from './direativecreation.component';

describe('DireativecreationComponent', () => {
  let component: DireativecreationComponent;
  let fixture: ComponentFixture<DireativecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireativecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireativecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
