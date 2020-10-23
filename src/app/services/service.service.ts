import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  data: string = "";
  constructor() {
    console.log('Servicio inyectado en componente correctamete');

    this.data = 'Miguel';
  }

  getData() {
    return this.data;
  }
}
