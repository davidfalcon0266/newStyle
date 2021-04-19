import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CompartidoService } from './services/compartido.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newStyleDog';

  constructor(public auth: AuthService) {

  }


}
