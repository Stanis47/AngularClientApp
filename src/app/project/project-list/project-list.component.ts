import { Observable } from "rxjs";
import { ProjectService } from "../project.service"; 
import { Project } from "../project";
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService, 
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.projects = this.projectService.getProjectsList();
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error)); 
  }

  projectDetails(id: number) {
    this.router.navigate(['projects/details', id]);
  }
}
