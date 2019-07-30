import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgrammerService } from '../programmer.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-programmer',
  templateUrl: './update-programmer.component.html',
  styleUrls: ['./update-programmer.component.scss']
})
export class UpdateProgrammerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private programmerService: ProgrammerService, private formBuilder: FormBuilder) { }

  programmerForm: FormGroup;
  id: number;

  ngOnInit() {
    this.getProgrammer(this.route.snapshot.params['id']);
    this.programmerForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required],
      'imageUrl': [null, Validators.required]
    });
  }

  getProgrammer(id: number) {
    this.programmerService.getProgrammer(id)
      .subscribe(data => {
        this.id = data["programmerID"];
        this.programmerForm.setValue({
          firstName: data["firstName"],
          lastName: data["lastName"],
          email: data["email"],
          phone: data["phone"],
          imageUrl: data["imageUrl"],
        });
      });
  }

  onFormSubmit() {
    if(this.programmerForm.invalid)
    {
      alert('fill out all the fields');
      return;
    }

    this.programmerService.updateProgrammer(this.id, this.programmerForm.value)
      .subscribe(res => {
        this.router.navigate(['/programmers/details', this.id]);
      }, error => console.log(error));
  }

  get f() { return this.programmerForm.controls; }

  programmerDetails() {
    this.router.navigate(['/programmers/details', this.id]);
  }
}
