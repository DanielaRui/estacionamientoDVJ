import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  selectedOption: string = ''; // Asigna un valor inicial

  constructor() {}

  updateForm() {
    // Lógica para actualizar el formulario según la opción seleccionada
  }
  ngOnInit() {
  }

}
