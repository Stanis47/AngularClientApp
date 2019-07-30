import { Observable } from "rxjs";
import { ProgrammerService } from "../programmer.service"; 
import { Programmer } from "../programmer";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/project/project';

@Component({
  selector: 'app-programmer-list',
  templateUrl: './programmer-list.component.html',
  styleUrls: ['./programmer-list.component.scss']
})
export class ProgrammerListComponent implements OnInit {

  programmers: Observable<Project[]>;
  count: number;

  constructor(private programmerService: ProgrammerService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.programmers = this.programmerService.getProgrammersList();
  }

  deleteProgrammer(id: number) {
    this.programmerService.deleteProgrammer(id)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.log(error)
     );
  }

  programmerDetails(id: number) {
    this.router.navigate(['programmers/details', id]);
  }
}
