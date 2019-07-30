import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgrammerComponent } from './update-programmer.component';

describe('UpdateProgrammerComponent', () => {
  let component: UpdateProgrammerComponent;
  let fixture: ComponentFixture<UpdateProgrammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProgrammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
