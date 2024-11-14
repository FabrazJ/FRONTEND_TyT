import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-user',
  standalone: true,
  imports: [FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule
  ],  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.scss'
})
export class CrearUserComponent {
 // Opciones para los selects
 departments = ['Ventas', 'Marketing', 'Desarrollo', 'Finanzas'];
 roles = ['Manager', 'Developer', 'HR', 'Support'];

 // Modelo de usuario vacío para crear un nuevo usuario
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

 onCreate() {
   // Lógica para crear el usuario (puedes reemplazar con lógica de backend)
   console.log('Usuario creado:', this.user);
 }

 onCancel() {
   // Lógica para cancelar la creación
   console.log('Creación cancelada');
 }
}
