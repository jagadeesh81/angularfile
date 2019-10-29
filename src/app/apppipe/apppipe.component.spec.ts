import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppipeComponent } from './apppipe.component';

describe('ApppipeComponent', () => {
  let component: ApppipeComponent;
  let fixture: ComponentFixture<ApppipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
