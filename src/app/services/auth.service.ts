import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7143/api/User/"
  constructor(private http: HttpClient, private router: Router) { }

  signup(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)

  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)

  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    if (localStorage) {
      return localStorage.getItem('token')
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token')
    }
    return false;
  }
}
