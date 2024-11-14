import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = 'http://localhost:8000/api/departamentos'; // URL de tu API Laravel

  constructor(private http: HttpClient) {}

  // Obtener todos los departamentos
  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un departamento por su ID
  getDepartamento(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo departamento
  createDepartamento(departamento: any): Observable<any> {
    return this.http.post(this.apiUrl, departamento);
  }

  // Actualizar un departamento
  updateDepartamento(id: number, departamento: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, departamento);
  }

  // Eliminar un departamento
  deleteDepartamento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
