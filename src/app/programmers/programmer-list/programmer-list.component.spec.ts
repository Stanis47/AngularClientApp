import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerListComponent } from './programmer-list.component';

describe('ProgrammerListComponent', () => {
  let component: ProgrammerListComponent;
  let fixture: ComponentFixture<ProgrammerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
