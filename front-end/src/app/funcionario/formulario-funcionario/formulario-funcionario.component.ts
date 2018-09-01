import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
//import 'rxjs/add/operador/map';
//import {map} from 'rxjs/add/operator/map';
import { FuncionarioService } from './../funcionario.service';
import { FuncionarioModels } from '../../models/funcionario-models';

@Component({
  selector: 'formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html',
  styleUrls: ['./formulario-funcionario.component.css']
})
export class FormularioFuncionarioComponent implements OnInit {
  
  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  funcionario: FuncionarioModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private funcionarioService: FuncionarioService) { }

  ngOnInit() {   
    this.funcionario = new FuncionarioModels();
  }


  salvarFuncionario(funcionario) {    
    this.funcionarioService.inserirFuncionario(funcionario.value)
      .subscribe(res => {        
        this.resetarFormulario(funcionario);
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(funcionario) {
    if (funcionario) {
      funcionario.reset();
      this.funcionario = new FuncionarioModels();
    }
  }

  /*
  consultaCEP(cep){
    console.log(cep);
    
    cep = cep.replace(/\D/g, '');

    if (cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.http.get(`//viacep.com.br/ws/"${cep}"/json`)
        //.pipe(map(dados => dados.json()))
          //.subscribe(dados => console.log(dados));
          //.map(dados => dados.json]());

      }
    }

  } */




}

