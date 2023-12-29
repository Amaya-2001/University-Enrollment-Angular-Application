import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private baseUrl: string = "https://localhost:7143/api/Enrollment/"

  constructor(private http: HttpClient, private router: Router) { }

  addEnrollment(enrollmentObj: any) {
    return this.http.post<any>(`${this.baseUrl}create`, enrollmentObj)
  }
  getEnrollmetList() {
    return this.http.get<any>(`${this.baseUrl}getAllEnrollments`)
  }

  editEnrollment(enrollmentId: string, enrollmentObj: any) {
    return this.http.put<any>(`${this.baseUrl}edit/${enrollmentId}`, enrollmentObj);
  }

  deleteEnrollment(enrollmentId: string) {
    return this.http.delete<any>(`${this.baseUrl}delete/${enrollmentId}`);
  }
  detailsEnrollment(enrollmentId: string) {
    return this.http.get<any>(`${this.baseUrl}details/${enrollmentId}`);
  }
}
