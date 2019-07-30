import { Programmer } from '../programmer';
import { Component, OnInit } from '@angular/core';
import { ProgrammerService } from '../programmer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/project/project';

@Component({
  selector: 'app-programmer-details',
  templateUrl: './programmer-details.component.html',
  styleUrls: ['./programmer-details.component.scss']
})
export class ProgrammerDetailsComponent implements OnInit {

  id: number;
  count: number;
  programmer: Programmer;
  projects: Project[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private programmerService: ProgrammerService) { }

  ngOnInit() {
    this.programmer = new Programmer();

    this.id = this.route.snapshot.params['id'];

    this.programmerService.getProgrammer(this.id)
      .subscribe(data => {
        this.programmer = data
        let projects = data["projects"];
        this.projects = projects;
        this.count = this.projects.length;
      }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['programmers']);
  }

  deleteProgrammer() {
    this.programmerService.deleteProgrammer(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['programmers']);
        }, error => console.log(error));
  }

  projectDetails(id: number) {
    this.router.navigate(['projects/details', id]);
  }

  updateProgrammer() {
    this.router.navigate(['/programmers/update', this.id]);
  }
}
