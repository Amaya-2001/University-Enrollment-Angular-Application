import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-student.edit',
  templateUrl: './student.edit.component.html',
  styleUrl: './student.edit.component.css'
})
export class StudentEditComponent implements OnInit {
  editForm!: FormGroup;
  studentId!: string;
  constructor(private fb: FormBuilder, private router: Router, private service: StudentService, private route: ActivatedRoute, private toast: NgToastService) {


  }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.editForm = this.fb.group({
      studentId: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  onEdit() {
    this.service.editStudent(this.studentId, this.editForm.value).subscribe({
      next: (res => {
        this.toast.success({ detail: "Edit student successfully!", summary: res.message, duration: 5000 });
        this.editForm.reset();
        this.router.navigate(['/pages/student'])
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: err.messgae, duration: 5000 })
      })
    })

  }

  onBack() {
    this.router.navigate(['pages/student'])
  }

}
