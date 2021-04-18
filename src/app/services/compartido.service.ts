import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  public modal: boolean = false;

  constructor() { }

  mostrarModal(valor: boolean) {
    console.log(valor);
    return this.modal = valor;

  }
}
