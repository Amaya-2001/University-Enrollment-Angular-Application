import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from './student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {



  constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService, private router: Router) {

  }
  ngOnInit(): void {


  }

  studentEditDialog() {
    this.dialog.open(StudentEditDialog);
  }

  addStudent() {
    //this.router.navigate(['/pages/create']);
    console.log('student dialog opened');
    this.dialog.open(StudentAddDialog);
    // this.service.addStudent(this.createForm.value).subscribe({
    //   next: (res => {
    //     this.toast.success({ detail: "Add New Student Successfully!", summary: res.message, duration: 5000 })
    //     this.createForm.reset();

    //   }),
    //   error: (err => {
    //     this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
    //   })
    // })

  }
  // viewDeatils() {
  //   this.dialog.open(StudentDetailsDialog);

  // }
  // studentDelete() {
  //   this.dialog.open(StudentDeleteDialog);

  // }
}

@Component({
  selector: 'studentEditModal.component',
  templateUrl: 'studentEditModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentEditDialog { }


@Component({
  selector: 'studentAddModel.component',
  templateUrl: 'studentAddModel.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class StudentAddDialog implements OnInit {

  public createForm!: FormGroup
  constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService, private router: Router) {

  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    console.log('this.createForm', this.createForm);
  }
  createNewStudent() {
    console.log(this.createForm.value);
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


@Component({
  selector: 'studentDetailsModel.component',
  templateUrl: 'studentDetailsModel.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentDetailsDialog { }


@Component({
  selector: 'studentDeleteModal.component',
  templateUrl: 'studentDeleteModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentDeleteDialog { }

