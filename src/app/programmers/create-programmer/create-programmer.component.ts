import { ProgrammerService } from '../programmer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-programmer',
  templateUrl: './create-programmer.component.html',
  styleUrls: ['./create-programmer.component.scss']
})
export class CreateProgrammerComponent implements OnInit {

  constructor(private programmerService: ProgrammerService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  programmerForm: FormGroup;

  ngOnInit() {
    this.programmerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      imageUrl: [null, Validators.required],
      birthDate: [Date.now(), Validators.required]
    });
  }

  onFormSubmit() {
    if(this.programmerForm.invalid)
    {
      alert('fill out all the fields');
      return;
    }
    
    this.programmerService.createProgrammer(this.programmerForm.value)
      .subscribe(res => {
        const id = res["programmerID"];
        this.router.navigate(['/programmers/details', id]);
      }, error => console.log(error));
  }

  get f() { return this.programmerForm.controls; }

  gotoList() {
    this.router.navigate(['/programmers']);
  }
}
