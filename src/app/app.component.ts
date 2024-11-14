import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditUserComponent } from './modal/editar-user/editar-user.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa el módulo de pruebas HTTP

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {CrearUserComponent} from './modal/crear-user/crear-user.component';

import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

//import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    UsuariosComponent,HttpClientTestingModule,
    EditUserComponent,BrowserModule,FormsModule,
    CrearUserComponent,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// export class AppComponent {
//   constructor(private dialog: MatDialog) {}

//   openEditUserDialog() {
//     this.dialog.open(EditUserComponent, {
//       width: '600px',  // Ajusta el tamaño del modal
//     });
//   }

//   openCreateUserDialog() {
//     this.dialog.open(CrearUserComponent, {
//       width: '600px',
//     });
//   }
// }
