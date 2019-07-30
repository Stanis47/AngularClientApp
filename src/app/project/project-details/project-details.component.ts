import { Project } from '../project';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { ProjectListComponent } from '../project-list/project-list.component'
import { Router, ActivatedRoute } from '@angular/router';
import { Programmer } from 'src/app/programmers/programmer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  count: number;
  project: Project;
  programmers: Programmer[] = [];
  assignedProgrammers: Programmer[];

  constructor(private route: ActivatedRoute, private router: Router,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.project = new Project();

    this.id = this.route.snapshot.params['id'];

    this.projectService.getProject(this.id)
      .subscribe(data => {
        this.project = data
        let programmers = data["programmers"]
        this.programmers = programmers
        this.count = this.programmers.length;
      }, error => console.log(error)); 
  }

  gotoList() {
    this.router.navigate(['projects']);
  }

  deleteProject() {
    this.projectService.deleteProject(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['projects']);
        },
        error => console.log(error)); 
  }

  programmerDetails(id: number) {
    this.router.navigate(['programmers/details', id]);
  }

  updateProject() {
    /*this.assignedProgrammers = [];

    this.programmers.forEach(element => {
      this.assignedProgrammers.push(element["programmer"]);
    });

    this.project.programmers = this.assignedProgrammers;
    this.project.isCompleted = false;

    this.projectService.updateProject(this.id, this.project)
     .subscribe(data => console.log(data),
      error => console.log(error));*/
    this.router.navigate(['projects/update/', this.id]);
  }

  assignProgrammers() {
    this.router.navigate(['projects/assign', this.id]);
  }
}