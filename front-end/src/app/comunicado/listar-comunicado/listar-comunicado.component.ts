import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

import { ComunicadoService } from './../comunicado.service';
import { ComunicadoModels } from '../../models/comunicado-models';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'listar-comunicado',
  templateUrl: './listar-comunicado.component.html',
  styleUrls: ['./listar-comunicado.component.css']
})
export class ListarComunicadoComponent implements OnInit {


  
  comunicado = {};
  idComunicado: any;
  formularioComunicado: boolean = false;
  alterarComunicado: boolean = false;
  detalharComunicado: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private messageService: MessageService, private confirmationService: ConfirmationService,
    private comunicadoService: ComunicadoService) { }


  ngOnInit() {
    this.buscarListaComunicado();    
  }

  selecionarComunicado(comunicado) {
    this.comunicado = comunicado;
  }

  modalComunicado(modal: string) {
    if (modal == "formulario"){
      this.formularioComunicado = true;
    } else if (modal == "alterar") {
      this.alterarComunicado = true;
    } else if (modal == "detalhar"){
      this.detalharComunicado = true;
    }
      
  }

  recebeIdComunicado(idComunicado) {
    this.idComunicado = idComunicado;
  } 

  buscarListaComunicado() {    
    this.comunicadoService.getComunicado()
    .subscribe(res => {      
      this.comunicadoService.listaComunicado = res as ComunicadoModels[];
    });
    console.log(this.comunicadoService.listaComunicado)
  }

  atualizarComunicado(comunicado: ComunicadoModels){
    this.comunicadoService.comunicado = comunicado;
  }

  excluirComunicado(_id: string, form: NgForm){
    if(confirm('Deseja excluir o comunicado?')){
      this.comunicadoService.excluirComunicado(_id)
      .subscribe(res => {
        this.buscarListaComunicado();
      })
    }
  }  
  
  confirmaExclusaoComunicado() {
    this.confirmationService.confirm({
      message: 'Deseja excluir a Comunicado?',
      accept: () => {
        console.log(this.idComunicado);        
        this.comunicadoService.excluirComunicado(this.idComunicado);
      }
    });
  }

}
