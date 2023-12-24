import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../course.services/course.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent implements OnInit {
  public editForm!: FormGroup;
  courseId!: string;
  constructor(private fb: FormBuilder, private router: Router, private service: CourseService, private toast: NgToastService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    this.editForm = this.fb.group({
      CourseId: ['', Validators.required],
      Title: ['', Validators.required],
      Credits: ['', Validators.required]
    })
    console.log(this.editForm.value);
  }
  onEdit() {
    console.log("courseId:", this.courseId);
    console.log("formValues:", this.editForm.value);
    this.service.editCourse(this.courseId, this.editForm.value).subscribe({
      next: (res => {

        this.toast.success({ detail: "Edit existing course successfully!", summary: res.message, duration: 5000 })
        this.editForm.reset();
        this.router.navigate(['/pages/course'])
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: err.messgae, duration: 5000 })
      })
    })
  }
  onBack() {
    this.router.navigate(['pages/course']);
  }

} 
