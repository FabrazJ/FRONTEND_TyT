import { Component } from '@angular/core';
import { UserService } from '../service/user.service'; // Ajusta la ruta si es necesario

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
  usuarios: Usuario[] = [];
  modalActivo: boolean = false;  // Estado del modal
  usuarioEdicion: Usuario = { id: 0, nombre: '', apellido: '', departamento: '', cargo: '', email: '' }; // Usuario para editar

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  agregarUsuario(nombre: string, apellido: string, departamento: string, cargo: string, email: string): void {
    const nuevoUsuario = { nombre, apellido, departamento, cargo, email };
    this.userService.createUser(nuevoUsuario).subscribe(
      (usuario) => {
        this.usuarios.push(usuario);  // Agrega el nuevo usuario a la lista
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);  // Elimina el usuario de la lista
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }

  editarUsuario(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      this.usuarioEdicion = { ...usuario }; // Cargar datos del usuario a editar
      this.modalActivo = true;  // Abrir el modal
    }
  }

  guardarEdicion(): void {
    this.userService.updateUser(this.usuarioEdicion.id, this.usuarioEdicion).subscribe(
      (usuarioActualizado) => {
        const index = this.usuarios.findIndex(u => u.id === this.usuarioEdicion.id);
        if (index !== -1) {
          this.usuarios[index] = usuarioActualizado;  // Actualiza el usuario en la lista
        }
        this.cerrarModal();  // Cerrar el modal
      },
      (error) => {
        console.error('Error al guardar los cambios:', error);
      }
    );
  }

  cerrarModal(): void {
    this.modalActivo = false;  // Cerrar el modal
  }
}
