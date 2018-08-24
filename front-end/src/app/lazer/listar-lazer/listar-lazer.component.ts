import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

// Meus imports
import { LazerService } from '../lazer.service';
import { LazerModels } from './../../models/lazer-models';

// Imports primeng 


@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {

  lazer = {dataInicio: new Date(), dataFim: new Date()};
  idLazer: any;
  formularioLazer: boolean = false;
  alterarLazer: boolean = false;
  detalharLazer: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private messageService: MessageService, private confirmationService: ConfirmationService,
    private lazerService: LazerService) { }


  ngOnInit() {
    this.buscarListaLazer();    
  }

  
  recebeIdLazer(idLazer) {
    this.idLazer = idLazer;
  } 

  converteDataLazer = (r: any) => ({...r, data: new Date(r.data) });

  selecionarLazer(lazer) {
    this.lazer = lazer;
  }
  
  modalLazer(modal: string) {
    if (modal == "formulario"){
      this.formularioLazer = true;
    } else if (modal == "alterar") {
      this.alterarLazer = true;
    } else if (modal == "detalhar"){
      this.detalharLazer = true;
    }
      
  }
  aoAlterarLazer(sucesso: boolean){
    this.alterarLazer = false;
    this.mensagem('success', 'Sucesso:', 'Alteracao de lazer realizado com sucesso.');
    this.buscarListaLazer();
  }

  aoSalvarFormularioLazer(sucesso: boolean) {
    this.formularioLazer = false;
    this.mensagem('success', 'Sucesso:', 'Cadastro de lazer realizado com sucesso.');
    this.buscarListaLazer();
  }

  buscarListaLazer() {    
    this.lazerService.getLazer(this.lazer.dataInicio.toString(), this.lazer.dataFim.toString())
    .subscribe((res:any) => {      
      this.lazerService.listaLazer = res.map(this.converteDataLazer) as LazerModels[];
    });    
  }

   
  confirmaExclusaoLazer() {
    this.confirmationService.confirm({
      message: 'Deseja excluir o Lazer?',
      accept: () => {        
        this.excluirLazer(this.idLazer);
      }
    });
  }

  excluirLazer(_id: string) {
      this.lazerService.excluirLazer(_id)
      .subscribe(res => {
        this.mensagem('success', 'Sucesso:', 'Lazer excluido com sucesso.');        
        this.buscarListaLazer(); 
      },(error) => {
        this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do lazer');        
      }
    );
  }   

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipoSeverity, summary: titulo, detail: txtMensagem });
  }

}
