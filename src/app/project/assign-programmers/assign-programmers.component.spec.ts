import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProgrammersComponent } from './assign-programmers.component';

describe('AssignProgrammersComponent', () => {
  let component: AssignProgrammersComponent;
  let fixture: ComponentFixture<AssignProgrammersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProgrammersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProgrammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
