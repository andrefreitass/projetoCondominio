import { GlobalService } from './../../uteis/global.service';
import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService, MenuItem  } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

import { FuncionarioService } from './../funcionario.service';
import { FuncionarioModels } from '../../models/funcionario-models';

@Component({
  selector: 'listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  
  filtroFuncionario = {pesquisaCpf: new String()};
  funcionario = {};  
  idFuncionario: any;
  formularioFuncionario: boolean = false;
  alterarFuncionario: boolean = false;
  detalharFuncionario: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private confirmationService: ConfirmationService,private messageService: MessageService,
    private globalService: GlobalService, private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.buscarListaFuncionario();    
  }
  
  recebeIdFuncionario(idFuncionario) {
    this.idFuncionario = idFuncionario;
  } 

  selecionarFuncionario(funcionario) {
    this.funcionario = funcionario;
  }

  converteDataFuncionario = (r: any) => ({...r, cpf: new String(r.cpf) });

  modalFuncionario(modal: string) {
    if (modal == "formulario"){
      this.formularioFuncionario = true;
    } else if (modal == "alterar") {
      this.alterarFuncionario = true;
    } else if (modal == "detalhar"){
      this.detalharFuncionario = true;
    }      
  }

  buscarListaFuncionario() {    
    this.funcionarioService.getFuncionario(this.filtroFuncionario.pesquisaCpf.toString())
    .subscribe((res:any) => {      
      this.funcionarioService.listaFuncionario = res as FuncionarioModels[];
      if(this.funcionarioService.listaFuncionario.length == 0){
        this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
        
      }      
    });    
  }

  aoSalvarFormularioFuncionario(sucesso: boolean) {
    if(sucesso == true){    
    this.formularioFuncionario = false;
    this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de funcionario realizado com sucesso.');
    this.buscarListaFuncionario();
  }else{
      this.formularioFuncionario = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao cadastrar o funcionario.');
    }
  }

  aoAlterarFuncionario(sucesso: boolean){
    if(sucesso == true){
    this.alterarFuncionario = false;
    this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de funcionario realizado com sucesso.');
    this.buscarListaFuncionario();
    } else {
      this.alterarFuncionario = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao alterar o funcionario.');
    }
    
  }

  excluirFuncionario(_id: string) {
    this.funcionarioService.excluirFuncionario(_id)
    .subscribe(res => {
      this.globalService.mensagem('success', 'Sucesso:', 'Funcionario excluido com sucesso.');        
      this.buscarListaFuncionario(); 
    },(error) => {
      this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do Funcionario');        
    }
  );
}  

confirmacaoExclusaoFuncionario() {
  this.messageService.clear();
  this.messageService.add({key: 'modalConfirmacaoExclusao', sticky: true, severity:'warn',
   summary:'Tem certeza que deseja excluir o Funcionario?', detail:'Confirme para prosseguir'});
} 

aoConfirmarExclusaoFuncionario(sucesso: boolean) { 
  if(sucesso == true) {
    this.excluirFuncionario(this.idFuncionario);  
  this.messageService.clear('modalConfirmacaoExclusao');
  } else {
    this.messageService.clear('modalConfirmacaoExclusao');
  }  
}
}