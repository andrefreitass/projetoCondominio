import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Meus imports
import { MultaService } from './../multa.service';
import { MultaModels } from '../../models/multa-models';

// Imports do primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'listar-multa',
  templateUrl: './listar-multa.component.html',
  styleUrls: ['./listar-multa.component.css']
})
export class ListarMultaComponent implements OnInit {
  
  filtroMulta = {dataInicio: new Date(), dataFim: new Date()};
  multa = {};  
  idMulta: any;
  formularioMulta: boolean = false;
  alterarMulta: boolean = false;
  detalharMulta: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private confirmationService: ConfirmationService,private multaService: MultaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.buscarListaMulta();    
  }
  
  recebeIdMulta(idMulta) {
    this.idMulta = idMulta;
  } 

  selecionarMulta(multa) {
    this.multa = multa;
  }

  converteDataMulta = (r: any) => ({...r, data: new Date(r.data) });

  modalMulta(modal: string) {
    if (modal == "formulario"){
      this.formularioMulta = true;
    } else if (modal == "alterar") {
      this.alterarMulta = true;
    } else if (modal == "detalhar"){
      this.detalharMulta = true;
    }      
  }

  buscarListaMulta() {    
    this.multaService.getMulta(this.filtroMulta.dataInicio.toString(), this.filtroMulta.dataFim.toString())
    .subscribe((res:any) => {      
      this.multaService.listaMulta = res.map(this.converteDataMulta) as MultaModels[];
    });    
  }

  aoSalvarFormularioMulta(sucesso: boolean) {
    if(sucesso == true){
      this.formularioMulta = false;
      this.mensagem('success', 'Sucesso:', 'Cadastro de multa realizado com sucesso.');
      this.buscarListaMulta();
    } else {
      this.formularioMulta = false;
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar o cadastro da multa.');
    }
    
  }

  aoAlterarMulta(sucesso: boolean){
    if(sucesso == true){
      this.alterarMulta = false;
      this.mensagem('success', 'Sucesso:', 'Alteracao de multa realizado com sucesso.');
      this.buscarListaMulta();
  } else {
    this.formularioMulta = false;
    this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a alteracao da multa.');
  }
}

  excluirMulta(_id: string) {
    this.multaService.excluirMulta(_id)
    .subscribe(res => {
      this.mensagem('success', 'Sucesso:', 'Multa excluido com sucesso.');        
      this.buscarListaMulta(); 
    },(error) => {
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do multa');        
    }
  );
}   
   
confirmacaoExclusaoMulta() {
  this.messageService.clear();
  this.messageService.add({key: 'modalConfirmacaoExclusao', sticky: true, severity:'warn',
   summary:'Tem certeza que deseja excluir o multa?', detail:'Confirme para prosseguir'});
} 

aoConfirmarExclusaoMulta(sucesso: boolean) { 
  if(sucesso == true) {
    this.excluirMulta(this.idMulta);  
  this.messageService.clear('modalConfirmacaoExclusao');
  } else {
    this.messageService.clear('modalConfirmacaoExclusao');
  }  
}

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {    
    this.messageService.add({severity: tipoSeverity, summary: titulo, detail:txtMensagem});    
  }

}