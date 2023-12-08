import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignUp() {
    console.log(this.signUpForm.value);
    this.auth.signup(this.signUpForm.value).subscribe({
      next: (res => {
        alert(res.message);
        this.signUpForm.reset();
        this.router.navigate(['login']);
      }),
      error: (err => {
        alert(err?.error.message);
      })
    });
  }
}
