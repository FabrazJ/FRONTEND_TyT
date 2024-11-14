import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:8000/api/cargos';

  constructor(private http: HttpClient) {}

  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCargo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCargo(cargo: any): Observable<any> {
    return this.http.post(this.apiUrl, cargo);
  }

  updateCargo(id: number, cargo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, cargo);
  }

  deleteCargo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
