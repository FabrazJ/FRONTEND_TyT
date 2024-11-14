import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8000/api/emails';

  constructor(private http: HttpClient) {}

  getEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmail(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createEmail(email: any): Observable<any> {
    return this.http.post(this.apiUrl, email);
  }

  updateEmail(id: number, email: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, email);
  }

  deleteEmail(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
