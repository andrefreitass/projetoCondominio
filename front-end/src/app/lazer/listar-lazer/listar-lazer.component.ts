import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Meus imports
import { LazerService } from './../lazer.service';
import { LazerModels } from '../../models/lazer-models';

//imports do primeng
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {
  
  filtroLazer = {dataInicio: new Date(), dataFim: new Date()};
  lazer = {};  
  idLazer: any;
  formularioLazer: boolean = false;
  alterarLazer: boolean = false;
  detalharLazer: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,private messageService: MessageService,
    private confirmationService: ConfirmationService,private lazerService: LazerService) { }

  ngOnInit() {
    this.buscarListaLazer();    
  }
  
  recebeIdLazer(idLazer) {
    this.idLazer = idLazer;
  } 

  selecionarLazer(lazer) {
    this.lazer = lazer;
  }

  converteDataLazer = (r: any) => ({...r, data: new Date(r.data) });

  modalLazer(modal: string) {
    if (modal == "formulario"){
      this.formularioLazer = true;
    } else if (modal == "alterar") {
      this.alterarLazer = true;
    } else if (modal == "detalhar"){
      this.detalharLazer = true;
    }      
  }

  buscarListaLazer() {    
    this.lazerService.getLazer(this.filtroLazer.dataInicio.toString(), this.filtroLazer.dataFim.toString())
    .subscribe((res:any) => {      
      this.lazerService.listaLazer = res.map(this.converteDataLazer) as LazerModels[];
    });    
  }

  aoSalvarFormularioLazer(sucesso: boolean) {
    if(sucesso == true){
      this.formularioLazer = false;
      this.mensagem('success', 'Sucesso:', 'Cadastro de lazer realizado com sucesso.');
      this.buscarListaLazer();
    } else {
      this.formularioLazer = false;
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar o cadastro da lazer.');
    }
  }

  aoAlterarLazer(sucesso: boolean){
    if(sucesso == true){
      this.alterarLazer = false;
      this.mensagem('success', 'Sucesso:', 'Alteracao de lazer realizado com sucesso.');
      this.buscarListaLazer();
  } else {
    this.formularioLazer = false;
    this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a alteracao da lazer.');
  }
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
   
confirmacaoExclusaoLazer() {
  this.messageService.clear();
  this.messageService.add({key: 'modalConfirmacaoExclusao', sticky: true, severity:'warn',
   summary:'Tem certeza que deseja excluir o lazer?', detail:'Confirme para prosseguir'});
} 

aoConfirmarExclusaoLazer(sucesso: boolean) { 
  if(sucesso == true) {
    this.excluirLazer(this.idLazer);  
  this.messageService.clear('modalConfirmacaoExclusao');
  } else {
    this.messageService.clear('modalConfirmacaoExclusao');
  }  
}

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {    
    this.messageService.add({severity: tipoSeverity, summary: titulo, detail:txtMensagem});    
  }

}