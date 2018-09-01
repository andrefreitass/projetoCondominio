import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
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

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private confirmationService: ConfirmationService,private funcionarioService: FuncionarioService) { }

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
      this.funcionarioService.listaFuncionario = res.map(this.converteDataFuncionario) as FuncionarioModels[];
    });    
  }

  aoSalvarFormularioFuncionario(sucesso: boolean) {
    if(sucesso == true){    
    this.formularioFuncionario = false;
    this.mensagem('success', 'Sucesso:', 'Cadastro de funcionario realizado com sucesso.');
    this.buscarListaFuncionario();
  }else{
      this.formularioFuncionario = false;
      this.mensagem('error', 'Erro:', 'Erro ao cadastrar o funcionario.');
    }
  }

  aoAlterarFuncionario(sucesso: boolean){
    if(sucesso == true){
    this.alterarFuncionario = false;
    this.mensagem('success', 'Sucesso:', 'Alteracao de funcionario realizado com sucesso.');
    this.buscarListaFuncionario();
    } else {
      this.alterarFuncionario = false;
      this.mensagem('error', 'Erro:', 'Erro ao alterar o funcionario.');
    }
    
  }

  excluirFuncionario(_id: string) {
    this.funcionarioService.excluirFuncionario(_id)
    .subscribe(res => {
      this.mensagem('success', 'Sucesso:', 'funcionario excluido com sucesso.');        
      this.buscarListaFuncionario(); 
    },(error) => {
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do funcionario');        
    }
  );
}   
   
  confirmaExclusaoFuncionario() {
    this.confirmationService.confirm({
      message: 'Deseja excluir o funcionario?',
      accept: () => {        
        this.excluirFuncionario(this.idFuncionario);
      }
    });
  }
  
  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipoSeverity, summary: titulo, detail: txtMensagem });
  }
}