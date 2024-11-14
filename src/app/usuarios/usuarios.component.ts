import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [FormsModule]  // Asegúrate de que FormsModule esté correctamente importado
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  modalActivo: boolean = false;
  esEdicion: boolean = false;
  usuarioEdicion: any = { nombre: '', apellido: '', departamento: '', cargo: '', email: '' };

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

  abrirModalCrear(): void {
    this.usuarioEdicion = { nombre: '', apellido: '', departamento: '', cargo: '', email: '' }; // Reinicia los campos
    this.esEdicion = false;
    this.modalActivo = true;
  }

  agregarUsuario(): void {
    const nuevoUsuario = { ...this.usuarioEdicion };
    this.userService.createUser(nuevoUsuario).subscribe(
      (usuario) => {
        this.usuarios.push(usuario);
        this.cerrarModal();
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }

  editarUsuario(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      this.usuarioEdicion = { ...usuario };  // Copia los datos del usuario a editar
      this.esEdicion = true;
      this.modalActivo = true;
    }
  }

  guardarEdicion(): void {
    if (!this.usuarioEdicion.id) return; // Verifica que hay un ID para editar
    this.userService.updateUser(this.usuarioEdicion.id, this.usuarioEdicion).subscribe(
      (usuarioActualizado) => {
        const index = this.usuarios.findIndex(u => u.id === usuarioActualizado.id);
        if (index !== -1) {
          this.usuarios[index] = usuarioActualizado;
        }
        this.cerrarModal();
      },
      (error) => {
        console.error('Error al guardar los cambios:', error);
      }
    );
  }

  cerrarModal(): void {
    this.modalActivo = false;
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
}
