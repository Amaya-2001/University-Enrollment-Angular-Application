import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string = "https://localhost:7143/api/Course/"

  constructor(private http: HttpClient, private router: Router) { }

  addCourse(courseObj: any) {
    return this.http.post<any>(`${this.baseUrl}create`, courseObj)
  }
  getCoursesList() {
    return this.http.get<any>(`${this.baseUrl}getAllCourse`)
  }

  editCourse(courseId: string, courseObj: any) {
    return this.http.put<any>(`${this.baseUrl}edit/${courseId}`, courseObj);
  }

  deleteCourse(courseId: string) {
    return this.http.delete<any>(`${this.baseUrl}delete/${courseId}`);
  }
  detailsCourse(courseId: string) {
    return this.http.get<any>(`${this.baseUrl}details/${courseId}`);
  }
}
