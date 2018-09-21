import { Component, OnInit } from '@angular/core';

//==Import de Funcionalidades ===
import { AuthService } from './auth.service';
import { FuncionarioModels } from '../../models/funcionario-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  funcionario : FuncionarioModels;


  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.funcionario = new FuncionarioModels();
  }

  fazerLogin(){
    if(this.authService.fazerLogin(this.funcionario)){
      console.log('Acerto Miseraviz');
    } else {
      console.log('Login errado');
    }
  }

}
