import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinepipeComponent } from './predefinepipe.component';

describe('PredefinepipeComponent', () => {
  let component: PredefinepipeComponent;
  let fixture: ComponentFixture<PredefinepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
