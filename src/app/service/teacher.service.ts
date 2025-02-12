import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {BaseService} from './base-service';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../model/teacher.model';
import {TeacherPaginatedDTO} from '../model/teacherPaginatedDTO.model';
import {TeacherForListDTO} from '../model/teacherForListDTO.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/teachers';
  }

  getAllTeachers(paginationSettings: string): Observable<TeacherPaginatedDTO> {
    return this.http.get<TeacherPaginatedDTO>(`${this.apiUrl}` + paginationSettings);
  }

  newTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.apiUrl}/teacher`, teacher);
  }

  searchTeachersByLastName(searchPattern: string, paginationSettings: string): Observable<TeacherPaginatedDTO> {
    return this.http.get<TeacherPaginatedDTO>(`${this.apiUrl}/teachersByLastName/` + searchPattern + paginationSettings);
  }

  findAllTeacher(): Observable<TeacherForListDTO[]> {
    return this.http.get<TeacherForListDTO[]>(`${this.apiUrl}`);
  }

  updateOneTeacher(teacherId: number , teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}/${teacherId}/edit`, teacher);
  }

  deleteTeacher(teacherId: number): Observable <any> {
    return this.http.delete(`${this.apiUrl}/${teacherId}/delete`);
  }

  showTeacherPage(teacherId: number): Observable <Teacher> {
    console.log(teacherId);
    return this.http.get<Teacher>(`${this.apiUrl}/${teacherId}`);
  }

}
