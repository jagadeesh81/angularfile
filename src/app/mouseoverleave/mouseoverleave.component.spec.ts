import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseoverleaveComponent } from './mouseoverleave.component';

describe('MouseoverleaveComponent', () => {
  let component: MouseoverleaveComponent;
  let fixture: ComponentFixture<MouseoverleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseoverleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseoverleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
