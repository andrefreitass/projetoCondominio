import { Component, OnInit } from '@angular/core';

//==Import de Funcionalidades ===
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;



  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    if(this.authService.fazerLogin(this.usuario)){
      console.log('Acerto Miseraviz');
    } else {
      console.log('Login errado');
    }
  }

}
