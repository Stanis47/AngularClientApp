import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'https://localhost:44340/api/projects';
  private body;

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProject(project: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProjectsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateProject(id: number, project: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, project);
  }
}
