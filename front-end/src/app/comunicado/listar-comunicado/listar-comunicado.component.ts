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

  aoSalvarFormularioComunicado(event: boolean) {
    this.formularioComunicado = false;
    this.mensagem('success', 'Sucesso:', 'Cadastro de comunicado realizado com sucesso.');
    this.buscarListaComunicado();
  }

  recebeIdComunicado(idComunicado) {
    this.idComunicado = idComunicado;
  } 

  converteDataComunicado = (r: any) => ({...r, data: new Date(r.data) });

  buscarListaComunicado() {    
    this.comunicadoService.getComunicado()
    .subscribe((res:any) => {      
      this.comunicadoService.listaComunicado = res.map(this.converteDataComunicado) as ComunicadoModels[];
    });
    console.log(this.comunicadoService.listaComunicado)
  }

  atualizarComunicado(comunicado: ComunicadoModels){
    this.comunicadoService.comunicado = comunicado;
  }

  excluirComunicado(_id: string) {
      this.comunicadoService.excluirComunicado(_id)
      .subscribe(res => {
        this.mensagem('success', 'Sucesso:', 'Comunicado excluido com sucesso.');        
        this.buscarListaComunicado(); 
      },(error) => {
        this.mensagem('error', 'Erro:', 'Nao foi possivel realizar o cadastro do comunicado');
        console.log(error);
      }
    );
  }  
  
  confirmaExclusaoComunicado() {
    this.confirmationService.confirm({
      message: 'Deseja excluir a Comunicado?',
      accept: () => {
        console.log(this.idComunicado);        
        this.excluirComunicado(this.idComunicado);
      }
    });
  }

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipoSeverity, summary: titulo, detail: txtMensagem });
  }

}
