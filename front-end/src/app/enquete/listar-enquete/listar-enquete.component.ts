import { Component, OnInit } from '@angular/core';
import { Message, MessageService, ConfirmationService, MenuItem } from '../../../../node_modules/primeng/api';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { EnqueteModels } from '../../models/enquete-models';
import { GlobalService } from '../../uteis/global.service';
import { EnqueteService } from './../enquete.service';

@Component({
  selector: 'listar-enquete',
  templateUrl: './listar-enquete.component.html',
  styleUrls: ['./listar-enquete.component.css']
})
export class ListarEnqueteComponent implements OnInit {
  
  filtroEnquete = {dataInicio: new Date(), dataFim: new Date()};
  enquete = {};
  idEnquete: any;
  formularioEnquete: boolean = false;
  alterarEnquete: boolean = false;
  detalharEnquete: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private messageService: MessageService, private confirmationService: ConfirmationService,
    private globalService: GlobalService,private enqueteService: EnqueteService) { }


  ngOnInit() {
    this.buscarListaEnquete();      
    this.globalService.convertCalendario();
}

  
  recebeIdEnquete(idEnquete) {
    this.idEnquete = idEnquete;
  } 

  selecionarEnquete(enquete) {
    this.enquete = enquete;
  }

  modalEnquete(modal: string) {
    if (modal == "formulario"){
      this.formularioEnquete = true;
    } else if (modal == "alterar") {
      this.alterarEnquete = true;
    } else if (modal == "detalhar"){
      this.detalharEnquete = true;
    }      
  }

  buscarListaEnquete() {
    if (this.filtroEnquete.dataInicio != null && this.filtroEnquete.dataFim != null) {
      this.enqueteService.getEnquete(this.filtroEnquete.dataInicio.toString(), this.filtroEnquete.dataFim.toString())
        .subscribe((res: any) => {
          this.enqueteService.listaEnquete = res.map(this.globalService.converteData) as EnqueteModels[];
          if (this.enqueteService.listaEnquete.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroEnquete.dataInicio != null && this.filtroEnquete.dataFim == null) {
      this.enqueteService.getEnqueteDataInicio(this.filtroEnquete.dataInicio.toString())
        .subscribe((res: any) => {
          this.enqueteService.listaEnquete = res.map(this.globalService.converteData) as EnqueteModels[];
          if (this.enqueteService.listaEnquete.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroEnquete.dataInicio == null && this.filtroEnquete.dataFim != null) {
      this.enqueteService.getEnqueteDataFim(this.filtroEnquete.dataFim.toString())
        .subscribe((res: any) => {
          this.enqueteService.listaEnquete = res.map(this.globalService.converteData) as EnqueteModels[];
          if (this.enqueteService.listaEnquete.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroEnquete.dataInicio == null && this.filtroEnquete.dataFim == null) {
      this.globalService.mensagem('warn', 'Alerta:', 'A data inicio ou data fim deve ser informada.');
    }
  }


  aoSalvarFormularioEnquete(sucesso: boolean) {
    if(sucesso == true){
      this.formularioEnquete = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de enquete realizado com sucesso.');
      this.buscarListaEnquete();
    } else {
      this.formularioEnquete = false;
      this.globalService.mensagem('error', 'Erro:', 'Não foi possivel realizar o cadastro da enquete.');
    }
    
  }

  aoAlterarEnquete(sucesso: boolean){
    if(sucesso == true){
      this.alterarEnquete = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteração de enquete realizado com sucesso.');
      this.buscarListaEnquete();
  } else {
    this.formularioEnquete = false;
    this.globalService.mensagem('error', 'Erro:', 'Não foi possivel realizar a alteração da enquete.');
  }
}

  excluirEnquete(_id: string) {
    this.enqueteService.excluirEnquete(_id)
    .subscribe(res => {
      this.globalService.mensagem('success', 'Sucesso:', 'Enquete excluida com sucesso.');        
      this.buscarListaEnquete(); 
    },(error) => {
      this.globalService.mensagem('error', 'Erro:', 'Não foi possivel realizar a exclusão da enquete');        
    }
  );
}   

confirmacaoExclusaoEnquete() {
  this.messageService.clear();
  this.messageService.add({key: 'modalConfirmacaoExclusao', sticky: true, severity:'warn',
   summary:'Tem certeza que deseja excluir a enquete?', detail:'Confirme para prosseguir'});
} 

aoConfirmarExclusaoEnquete(sucesso: boolean) { 
  if(sucesso == true) {
    this.excluirEnquete(this.idEnquete);  
  this.messageService.clear('modalConfirmacaoExclusao');
  } else {
    this.messageService.clear('modalConfirmacaoExclusao');
  }  
}

}
