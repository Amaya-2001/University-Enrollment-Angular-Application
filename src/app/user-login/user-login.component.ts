import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: NgToastService) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onLogin() {

    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {

        this.toast.success({ detail: "Success!", summary: res.message, duration: 5000 })
        this.loginForm.reset();
        this.auth.storeToken(res.token);
        this.router.navigate([''])
      },
      error: (err) => {

        this.toast.error({ detail: "Error!", summary: "Something Went Wrong!", duration: 5000 })
      }
    })
  }


}
