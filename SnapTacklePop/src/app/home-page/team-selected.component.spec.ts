import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSelectedComponent } from './team-selected.component';

describe('TeamSelectedComponent', () => {
  let component: TeamSelectedComponent;
  let fixture: ComponentFixture<TeamSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
