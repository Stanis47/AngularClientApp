import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private projectService: ProjectService, private formBuilder: FormBuilder) { }

  projectForm: FormGroup;
  id: number;

  ngOnInit() {
    this.getProject(this.route.snapshot.params['id']);
    this.projectForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'fullDescription': [null, Validators.required]
    });
  }

  getProject(id: number) {
    this.projectService.getProject(id)
      .subscribe(data => {
        this.id = data["projectID"];
        this.projectForm.setValue({
          name: data["name"],
          description: data["description"],
          fullDescription: data["fullDescription"]
        });
      });
  }

  onFormSubmit() {
    if(this.projectForm.invalid)
    {
      alert('fill out all the fields');
      return;
    }
    
    this.projectService.updateProject(this.id, this.projectForm.value)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['/projects/details/', this.id]);
      }, error => console.log(error));
  }

  get f() { return this.projectForm.controls; }

  projectDetails() {
    this.router.navigate(['/projects/details/', this.id]);
  }
}
