import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModels } from '../../models/login-models';
import { LoginService } from '../login.service';

//Imports do Primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  
  login: LoginModels;
  
  constructor( private http: HttpClient, private loginService: LoginService ) { }

  ngOnInit() {
    this.login = new LoginModels();
  }

  salvarLogin( login ) {
    this.loginService.inserirLogin( login.value )
      .subscribe( (res) => {
        this.reset();
        this.aoSalvar.emit(true);
      }, error => {
        this.reset();
        this.aoSalvar.emit(false);
      })
  }

  private reset() {
    this.login._id = "";
    this.login.login = "";
    this.login.senha = "";
  }

}
