import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'; // Ajusta la ruta si es necesario
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [FormsModule] // Añade FormsModule aquí
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  modalActivo: boolean = false;
  esEdicion: boolean = false;  // Bandera para saber si es creación o edición
  usuarioEdicion: any = { nombre: '', apellido: '', departamento: '', cargo: '', email: '' }; // Datos del usuario

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

  // Método para abrir el modal en modo creación
  abrirModalCrear(): void {
    this.usuarioEdicion = { nombre: '', apellido: '', departamento: '', cargo: '', email: '' };  // Reinicia los campos
    this.esEdicion = false;  // Establece que estamos en modo creación
    this.modalActivo = true;  // Muestra el modal
  }

  // Método para agregar un nuevo usuario
  agregarUsuario(): void {
    const nuevoUsuario = { ...this.usuarioEdicion };  // Usa los datos del formulario
    this.userService.createUser(nuevoUsuario).subscribe(
      (usuario) => {
        this.usuarios.push(usuario);  // Agrega el nuevo usuario a la lista
        this.cerrarModal();  // Cierra el modal
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }

  // Método para abrir el modal en modo edición
  editarUsuario(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      this.usuarioEdicion = { ...usuario };  // Copia los datos del usuario a editar
      this.esEdicion = true;  // Establece que estamos en modo edición
      this.modalActivo = true;  // Muestra el modal
    }
  }

  // Método para guardar los cambios de edición
  guardarEdicion(): void {
    this.userService.updateUser(this.usuarioEdicion.id, this.usuarioEdicion).subscribe(
      (usuarioActualizado) => {
        const index = this.usuarios.findIndex(u => u.id === usuarioActualizado.id);
        if (index !== -1) {
          this.usuarios[index] = usuarioActualizado;  // Actualiza el usuario en la lista
        }
        this.cerrarModal();  // Cierra el modal
      },
      (error) => {
        console.error('Error al guardar los cambios:', error);
      }
    );
  }

  // Método para cerrar el modal
  cerrarModal(): void {
    this.modalActivo = false;  // Oculta el modal
  }

  // Método para eliminar un usuario
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
}
