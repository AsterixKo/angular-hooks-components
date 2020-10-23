import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form) {
    alert('El formulario se ha enviado');
    console.log(form);

    console.log('Mis propiedades del componente');
    console.log('name:', this.nombre);
    console.log('email:', this.email);
    console.log('mensaje:', this.mensaje);
  }

}
