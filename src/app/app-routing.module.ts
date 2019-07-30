import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProgrammerListComponent } from './programmers/programmer-list/programmer-list.component';
import { ProgrammerDetailsComponent } from './programmers/programmer-details/programmer-details.component';
import { CreateProgrammerComponent } from './programmers/create-programmer/create-programmer.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { UpdateProgrammerComponent } from './programmers/update-programmer/update-programmer.component';
import { AssignProgrammersComponent } from './project/assign-programmers/assign-programmers.component';

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/add', component: CreateProjectComponent },
  { path: 'projects/details/:id', component: ProjectDetailsComponent },
  { path: 'projects/update/:id', component: UpdateProjectComponent },
  { path: 'projects/assign/:id', component: AssignProgrammersComponent },

  { path: 'programmers', component: ProgrammerListComponent },
  { path: 'programmers/add', component: CreateProgrammerComponent },
  { path: 'programmers/details/:id', component: ProgrammerDetailsComponent },
  { path: 'programmers/update/:id', component: UpdateProgrammerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
