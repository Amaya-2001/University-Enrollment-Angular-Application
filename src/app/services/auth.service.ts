import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7153/Users/"
  constructor(private http: HttpClient) { }

  signup(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}SignUpPost`, userObj)

  }

  // login(loginObj:any){

  // }
}
