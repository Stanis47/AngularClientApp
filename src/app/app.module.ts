import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProgrammerComponent } from './programmers/create-programmer/create-programmer.component';
import { ProgrammerListComponent } from './programmers/programmer-list/programmer-list.component';
import { UpdateProgrammerComponent } from './programmers/update-programmer/update-programmer.component';
import { ProgrammerDetailsComponent } from './programmers/programmer-details/programmer-details.component';
import { AssignProgrammersComponent } from './project/assign-programmers/assign-programmers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ProjectDetailsComponent,
    CreateProgrammerComponent,
    ProgrammerListComponent,
    UpdateProgrammerComponent,
    ProgrammerDetailsComponent,
    AssignProgrammersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
