import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgrammerComponent } from './create-programmer.component';

describe('CreateProgrammerComponent', () => {
  let component: CreateProgrammerComponent;
  let fixture: ComponentFixture<CreateProgrammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProgrammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
