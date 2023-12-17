import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { StudentService } from '../student/student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {

  public createForm!: FormGroup
  constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  addStudent() {
    //this.dialog.open(this.createForm.value);
    this.service.addStudent(this.createForm.value).subscribe({
      next: (res => {
        this.toast.success({ detail: "Add New Student Successfully!", summary: res.message, duration: 5000 })
        this.createForm.reset();

      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
      })
    })

  }

}
