import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = "https://localhost:7143/api/Student/"

  constructor(private http: HttpClient, private router: Router) { }

  getStudentList() {
    return this.http.get<any>(`${this.baseUrl}getAllStudents`)
  }

  addStudent(studentObj: any) {
    return this.http.post<any>(`${this.baseUrl}create`, studentObj)

  }
  editStudent(studentId: string, studentObj: any) {
    return this.http.put<any>(`${this.baseUrl}edit/${studentId}`, studentObj)
  }

  deleteStudent(studentId: string) {
    return this.http.post<any>(`${this.baseUrl}delete`, studentId)
  }

  viewStudentDetails(studentId: string) {
    return this.http.get<any>(`${this.baseUrl}details/${studentId}`)
  }
}
