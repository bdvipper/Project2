import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage2Component } from './landingpage2.component';

describe('Landingpage2Component', () => {
  let component: Landingpage2Component;
  let fixture: ComponentFixture<Landingpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
