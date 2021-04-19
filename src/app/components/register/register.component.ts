import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formG: FormGroup;
  public loading = false;
  public password = false;
  hide1 = true;
  hide2 = true;
  usuario: Usuario = new Usuario('', '', '');
  constructor(public formB: FormBuilder,
              public router: Router,
              public auth: AuthService,
          
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      correo: [null, Validators.required],
      pws: [null, [Validators.required, Validators.minLength(5)]],
      pws2: [null, [Validators.required, Validators.minLength(5)]],
      codigo: null
    });
  }

  registrar() {
   this.validarPassword();
   if (this.password) {
      return;
   }
   this.loading = true;
   this.usuario.correo = this.formG.value.correo;
   this.usuario.password = this.formG.value.pws;
   this.auth.register(this.usuario.correo, this.usuario.password);
  }

   validarPassword() {
    this.password = false;
    const pws1 = this.formG.value.pws;
    const pws2 = this.formG.value.pws2;

    if (pws1 !== pws2) {
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        text: 'Intentalo de nuevo',
      });
      this.password = true;
      console.log('no consinciden');
    } else {
      this.password = false;
      console.log('son iguales');
    }
  }

  cerrarModal(){
    this.auth.modalServ = false;
    this.auth.registerModal = false;
  }

}
