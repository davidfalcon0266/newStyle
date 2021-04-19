import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public modalServ: boolean = false;
  public registerModal: boolean = false;
  public loginModal: boolean = false;

  constructor(public afAuth: AngularFireAuth) { }

  login(mail: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, password);
  }

  public register(mail: string, password: string): Promise<void> {
  
    return this.afAuth.createUserWithEmailAndPassword(mail, password).then(async (user) => {

    }).catch(error => {
      
      console.log(error);
     
    });
  }

}
