import { Component } from '@angular/core';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  standalone: true,
  styleUrls: ['./usuarios.component.scss'],
  imports: []
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana García', email: 'ana@example.com' },
  ];

  agregarUsuario(nombre: string, email: string) {
    const nuevoUsuario: Usuario = {
      id: this.usuarios.length + 1,
      nombre,
      email
    };
    this.usuarios.push(nuevoUsuario);
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(user => user.id !== id);
  }
}
