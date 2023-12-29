import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentService } from '../../../../edit.services/enrollment.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-enrollment-edit',
  templateUrl: './enrollment-edit.component.html',
  styleUrl: './enrollment-edit.component.css'
})
export class EnrollmentEditComponent implements OnInit {

  public editForm!: FormGroup;
  enrollmentId!: string;
  constructor(private fb: FormBuilder, private router: Router, private service: EnrollmentService, private toast: NgToastService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.enrollmentId = this.route.snapshot.params['enrollmentId'];
    this.editForm = this.fb.group({
      EnrollmentId: ['', Validators.required],
      CourseId: ['', Validators.required],
      StudentId: ['', Validators.required],
      EnrollmentDate: ['', Validators.required]
    })


  }
  onEdit() {
    this.service.editEnrollment(this.enrollmentId, this.editForm.value).subscribe({
      next: (res => {

        this.toast.success({ detail: "Edit existing enrollment successfully!", summary: res.message, duration: 5000 })
        this.editForm.reset();
        this.router.navigate(['/pages/enrollment'])
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: err.messgae, duration: 5000 })
      })
    })
  }
  onBack() {
    this.router.navigate(['pages/enrollment']);
  }


}
