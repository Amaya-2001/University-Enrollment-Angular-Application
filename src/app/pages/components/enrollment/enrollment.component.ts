import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrollmentService } from '../../edit.services/enrollment.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent implements OnInit {
  public addForm!: FormGroup
  enrollments: any[] = [];
  EnrollmentId!: string;
  EnrollmentCourseID: string = '';
  EnrollmentStudentID: string = '';
  EnrollmentDate: string = '';
  constructor(private fb: FormBuilder, private service: EnrollmentService, private toast: NgToastService, private router: Router) {


  }
  ngOnInit(): void {
    this.addForm = this.fb.group({
      CourseId: ['', Validators.required],
      StudentId: ['', Validators.required],
      EnrollmentDate: ['', Validators.required]
    })
    this.getAllEnrollments();
  }

  getAllEnrollments() {
    this.service.getEnrollmetList().subscribe((data) => {
      this.enrollments = data;
      console.log(data);
    })
  }
  onAdd() {
    console.log(this.addForm.value);
    this.service.addEnrollment(this.addForm.value).subscribe({
      next: (res => {
        this.toast.success({ detail: "Add new enrollment successfully!", summary: res.message, duration: 5000 })
        this.addForm.reset();
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
      })
    })
  }
  onDetailsModal(enrollmentId: string, courseId: string, studentId: string, enrollmentDate: string) {
    this.EnrollmentId = enrollmentId;
    this.EnrollmentCourseID = courseId;
    this.EnrollmentStudentID = studentId;
    this.EnrollmentDate = enrollmentDate;
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }
  onCloseDetailsModal() {
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  onOpenDeleteModal(enrollmentId: string) {
    this.EnrollmentId = enrollmentId;
    const modalDiv = document.getElementById('deleteModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
    //this.onDelete();
    this.service.deleteEnrollment(this.EnrollmentId).subscribe({
      next: (res => {

        this.toast.success({ detail: "Delete enrollment successfully!", summary: res.message, duration: 5000 })
        this.router.navigate(['pages/enrollment']);
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
      })

    })
  }
  onCloseModal() {
    const modalDiv = document.getElementById('deleteModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
