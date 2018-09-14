import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: string){
    if(usuario === 'teste'){
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
      return true;
    } else {
      this.mostrarMenuEmitter.emit(false);
      return false;
    }
  }

}
