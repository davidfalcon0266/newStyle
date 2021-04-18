import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  modal: boolean = false;
  register: boolean = false;
  login: boolean = false;

  constructor(public modalService: CompartidoService) { 
   // this.modal = modalService.modal;
  }

  ngOnInit(): void {
  }

  mostrarModal() {
    this.modal = true;
    this.login = true;
  }

  cerrarModal(){
    this.modal = false;
    this.login = false;
    this.register = false;
  }

}
