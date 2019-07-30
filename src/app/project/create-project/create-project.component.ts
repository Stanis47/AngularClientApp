import { ProjectService } from '../project.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  projectForm: FormGroup;
  id: number;

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'fullDescription': [null, Validators.required]
    });
  }

  onFormSubmit() {
    if(this.projectForm.invalid)
    {
      alert('fill out all the fields');
      return;
    }

    this.projectService.createProject(this.projectForm.value)
      .subscribe(res => {
        const id = res["projectID"];
        this.router.navigate(['/projects/details', id]);
      }, error => console.log(error));
  }

  get f() { return this.projectForm.controls; }

  gotoList() {
    this.router.navigate(['/projects']);
  }
}
