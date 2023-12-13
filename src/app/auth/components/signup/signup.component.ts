import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignUp() {

    this.auth.signup(this.signUpForm.value).subscribe({
      next: (res => {
        this.toast.success({ detail: "Registration Success!", summary: res.message, duration: 5000 })
        this.signUpForm.reset();
        this.router.navigate(['/auth/login']);
      }),
      error: (err => {
        this.toast.error({ detail: "Error!", summary: "Something Went Wrong!", duration: 5000 })
      })
    });
  }
}


