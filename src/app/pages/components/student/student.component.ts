import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from './student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  students: any[] = []
  studentId!: string;
  studentFname: string = '';
  studentLname: string = '';
  studentEmail: string = '';
  constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllStudentDetails();
  }

  getAllStudentDetails() {
    console.log("student list");
    this.service.getStudentList().subscribe((data) => {
      this.students = data;
    });

  }
  addStudent() {
    //this.router.navigate(['/pages/create']);
    console.log('student dialog opened');
    this.dialog.open(StudentAddDialog);
  }
  onCloseDetailsModal() {
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  viewDeatils(studentId: string, firstName: string, lastName: string, email: string) {
    this.studentId = studentId;
    this.studentFname = firstName;
    this.studentLname = lastName;
    this.studentEmail = email;
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }

  }
}

// @Component({
//   selector: 'studentEditModal.component',
//   templateUrl: 'studentEditModal.component.html',
//   styleUrl: './student.component.css',
//   standalone: true,
//   imports: [],
// })
// export class StudentEditDialog { }


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


// @Component({
//   selector: 'studentDetailsModel.component',
//   templateUrl: 'studentDetailsModel.component.html',
//   styleUrl: './student.component.css',
//   standalone: true,
//   imports: [NgIf, NgFor],
// })
// export class StudentDetailsDialog implements OnInit {
//   studentDetails: any;

//   constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService, private router: Router) {

//   }
//   ngOnInit(): void {
//     this.loadStudentDetails();
//   }

//   loadStudentDetails() {
//     this.service.viewStudentDetails().subscribe(data => {
//       this.studentDetails = data;
//       console.log(data);
//     })
//   }





// }

@Component({
  selector: 'studentEditModal.component',
  templateUrl: 'studentEditModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class StudentEditDialog implements OnInit {
  public editForm!: FormGroup
  updateDetails: any;
  constructor(private dialog: MatDialog, private service: StudentService, private fb: FormBuilder, private toast: NgToastService, private router: Router) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      StudentId: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    console.log('this.createForm', this.editForm);
  }

  editStudent() {
    // this.service.editStudent(StudentId).subscribe(updatedData => {
    //   this.updateDetails = updatedData;
    // })

  }
}


@Component({
  selector: 'studentDeleteModal.component',
  templateUrl: 'studentDeleteModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentDeleteDialog { }

