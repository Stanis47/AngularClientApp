import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ProgrammerService } from 'src/app/programmers/programmer.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/project/project';
import { Programmer } from 'src/app/programmers/programmer';

@Component({
  selector: 'app-assign-programmers',
  templateUrl: './assign-programmers.component.html',
  styleUrls: ['./assign-programmers.component.scss']
})
export class AssignProgrammersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private projectService: ProjectService, private programmerService: ProgrammerService) { }

  programmers: ProgrammerResource[] = [];
  selected: ProgrammerResource[] = [];
  id: number;
  project: Project = new Project();

  ngOnInit() {
    this.getProgrammers();

    this.id = this.route.snapshot.params['id'];

    this.projectService.getProject(this.id)
      .subscribe(data => {
        this.project = data;
      }, error => console.log(error));
  }

  getProgrammers() {
    this.programmerService.getProgrammersList()
      .subscribe(progers => this.programmers = progers);
  }

  checkItem(id: number) {
    var programmer = this.programmers.find(proger => proger.programmerID === id);

    if (programmer.checked)
    {
      programmer.checked = false;
      var index = this.selected.indexOf(programmer);
      this.selected.splice(index, 1);
    }
    else
    {
      programmer.checked = true;

      var selectedProgrammer = new ProgrammerResource();
      selectedProgrammer.programmerID = programmer["programmerID"];

      this.selected.push(selectedProgrammer);
    }
  }

  assign() {
    var result: Project = new Project();
    result.name = this.project["name"]; 
    result.description = this.project["description"];
    result.fullDescription = this.project["fullDescription"];
    result.isCompleted = this.project["isCompleted"];
    result.programmers = this.selected;

    this.projectService.updateProject(this.id, result)
      .subscribe( data => {
        this.router.navigate(['projects/details', this.id]);
      },
        error => console.log("error"));
  }

  projectDetails() {
    this.router.navigate(['projects/details', this.id]);
  }
}

export class ProgrammerResource extends Programmer {
  checked: boolean;
}
