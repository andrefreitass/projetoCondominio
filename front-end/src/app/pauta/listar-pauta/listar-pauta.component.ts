import { PautaModels } from './../../models/pauta-models';
import { Component, OnInit } from '@angular/core';
import { Message, MessageService, ConfirmationService, MenuItem } from '../../../../node_modules/primeng/api';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { PautaService } from '../pauta.service';
import { GlobalService } from '../../uteis/global.service';

@Component({
  selector: 'listar-pauta',
  templateUrl: './listar-pauta.component.html',
  styleUrls: ['./listar-pauta.component.css']
})
export class ListarPautaComponent implements OnInit {

  filtroPauta = {dataInicio: new Date(), dataFim: new Date()}
  pauta = {};
  idPauta: any;
  formularioPauta: boolean = false;
  alterarPauta: boolean = false;
  detalharPauta: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private messageService: MessageService, private confirmationService: ConfirmationService,
    private pautaService: PautaService,private globalService: GlobalService ) { }

  ngOnInit() {
    this.buscarListaPauta();   
}

  recebeIdPauta(idPauta){
    this.idPauta = idPauta;
  }

  selecionarPauta(pauta){
    this.pauta = pauta;
  }

  converteData = (r: any) => ({...r, data: new Date(r.data) });

  modalPauta(modal: string){
    if(modal == "formulario"){
      this.formularioPauta = true;
    } else if(modal == "alterar"){
      this.alterarPauta = true;
    } else if(modal == "detalhar"){
      this.detalharPauta = true;
    }    
  }

  buscarListaPauta(){
    this.pautaService.getPauta(this.filtroPauta.dataInicio.toString(),this.filtroPauta.dataFim.toString())
    .subscribe((res:any) => {
      this.pautaService.listaPauta = res.map(this.converteData) as PautaModels[];
      if(this.pautaService.listaPauta.length == 0){
        this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
      }      
    });
  }

  aoSalvarFormularioPauta(sucesso: boolean) {
    if(sucesso == true){
      this.formularioPauta = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de pauta realizado com sucesso.');
      this.buscarListaPauta();
    } else {
      this.formularioPauta = false;
      this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar o cadastro da pauta.');
    }    
  }

  aoAlterarPauta(sucesso: boolean){
    if(sucesso == true){
      this.alterarPauta = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de pauto realizado com sucesso.');
      this.buscarListaPauta();
    } else {
      this.alterarPauta = false;
      this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a alteracao da pauta.');
    }

  }

  excluirPauta(_id: string) {
    this.pautaService.excluirPauta(_id)
    .subscribe(res => {
      this.globalService.mensagem('success', 'Sucesso:', 'Pauta excluida com sucesso.');        
      this.buscarListaPauta(); 
    },(error) => {
      this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao da pauta');        
    }
  );
}   

confirmacaoExclusaoPauta() {
  this.messageService.clear();
  this.messageService.add({key: 'modalConfirmacaoExclusao', sticky: true, severity:'warn',
   summary:'Tem certeza que deseja excluir a pauta?', detail:'Confirme para prosseguir'});
} 

aoConfirmarExclusaoPauta(sucesso: boolean) { 
  if(sucesso == true) {
    this.excluirPauta(this.idPauta);  
  this.messageService.clear('modalConfirmacaoExclusao');
  } else {
    this.messageService.clear('modalConfirmacaoExclusao');
  }  
}

}
