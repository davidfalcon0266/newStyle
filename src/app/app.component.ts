import { Component } from '@angular/core';
import { CompartidoService } from './services/compartido.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newStyleDog';
  modal: boolean;

  constructor(public modalService: CompartidoService) {
     this.modal = modalService.modal;
  }


}
