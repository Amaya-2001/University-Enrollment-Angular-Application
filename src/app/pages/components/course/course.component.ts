import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../course.services/course.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses: any[] = []
  public addForm!: FormGroup
  courseId!: string;
  courseTitle: string = '';
  courseCredits: string = '';
  constructor(private fb: FormBuilder, private service: CourseService, private toast: NgToastService, private router: Router, private route: ActivatedRoute) {


  }
  ngOnInit(): void {

    this.addForm = this.fb.group({
      Title: ['', Validators.required],
      Credits: ['', Validators.required]
    })
    this.gellAllCourses();
  }

  onAdd() {
    console.log(this.addForm.value);
    this.service.addCourse(this.addForm.value).subscribe({
      next: (res => {

        this.toast.success({ detail: "Add new course successfully!", summary: res.message, duration: 5000 })
        this.addForm.reset();
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
      })
    })
  }

  gellAllCourses() {
    this.service.getCoursesList().subscribe((data) => {
      console.log(data);
      this.courses = data;
    })
  }

  onOpenModal(courseId: string, title: string) {
    this.courseId = courseId;

    const modalDiv = document.getElementById('deleteModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
    this.courseTitle = title;
    this.onDelete();
  }
  onCloseModal() {
    const modalDiv = document.getElementById('deleteModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  onDelete() {
    console.log(this.courseId);
    this.service.deleteCourse(this.courseId).subscribe({
      next: (res => {

        this.toast.success({ detail: "Delete course successfully!", summary: res.message, duration: 5000 })
        this.router.navigate(['pages/course']);
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something went wrong!", duration: 5000 })
      })

    })
  }
  onDetailsModal(courseId: string, title: string, credits: string) {
    this.courseId = courseId;
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
    this.courseTitle = title;
    this.courseCredits = credits;

  }

  onDetails() {
    this.service.detailsCourse(this.courseId).subscribe({
      next: (res => {
        console.log(res);
      })
    })
  }

  onCloseDetailsModal() {
    const modalDiv = document.getElementById('detailsModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

}
