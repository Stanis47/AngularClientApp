import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {

  private baseUrl = 'https://localhost:44340/api/programmers';

  constructor(private http: HttpClient) { }

  getProgrammer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProgrammer(programmer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, programmer);
  }

  deleteProgrammer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProgrammersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateProgrammer(id: number, programmer: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, programmer);
  }
}

