import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  register: boolean = false;
  login: boolean = false;

  formG: FormGroup;
  usuario: Usuario = new Usuario('', '', '');

  constructor(public formB: FormBuilder,
              public auth: AuthService,
              public router: Router) { 
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      correo: [null, Validators.required],
      pws: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
 
    this.usuario.correo = this.formG.value.correo;
    this.usuario.password = this.formG.value.pws;
    this.auth.login(this.usuario.correo, this.usuario.password).then((user: any) => {
         console.log(user);
        if (!user.user.emailVerified
          ) {
            Swal.fire({
              icon: 'info',
              title: 'se le envio un link a ' + user.user.email,
              text: 'Por favor verifique',
            });
            return;
          }
       
        this.router.navigateByUrl('/productos');
        
        }).catch(error => {
     
      return;
    });
  }

  mostrarModal() {
    this.auth.modalServ= true;
    this.auth.loginModal = true;
  }

  cerrarModal(){
    this.auth.modalServ = false;
    this.auth.loginModal = false;
    this.auth.registerModal = false;
  }

}
