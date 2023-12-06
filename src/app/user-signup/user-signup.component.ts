import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent implements OnInit {

  constructor(

    private router: Router
  ) {


  }
  ngOnInit(): void {

  }
  onLogin() {
    this.router.navigate(['login']);
  }

}
