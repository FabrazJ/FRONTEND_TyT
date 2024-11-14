import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-user',
  standalone: true,
  imports: [FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './editar-user.component.html',
  styleUrl: './editar-user.component.scss'
})
export class EditUserComponent {
  // Opciones de los combos
  departments = ['Ventas', 'Marketing', 'Desarrollo', 'Finanzas'];
  roles = ['Manager', 'Developer', 'HR', 'Support'];

  // Datos iniciales de usuario (puedes reemplazar esto con datos reales)
  user = {
    department: '',
    role: '',
    username: '',
    email: '',
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: ''
  };

  constructor() {}

  onUpdate() {
    // Lógica para actualizar el usuario
    console.log('Usuario actualizado:', this.user);
  }

  onCancel() {
    // Lógica para cancelar la edición
    console.log('Edición cancelada');
  }
}
