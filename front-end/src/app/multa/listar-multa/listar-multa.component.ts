import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Meus imports
import { MultaService } from './../multa.service';
import { MultaModels } from '../../models/multa-models';
import { GlobalService } from './../../uteis/global.service';

// Imports do primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message, ConfirmationService, MenuItem } from 'primeng/api';


@Component({
  selector: 'listar-multa',
  templateUrl: './listar-multa.component.html',
  styleUrls: ['./listar-multa.component.css']
})
export class ListarMultaComponent implements OnInit {
  
  filtroMulta = { dataInicio: new Date(), dataFim: new Date() };
  multa = {};
  idMulta: any;
  formularioMulta: boolean = false;
  alterarMulta: boolean = false;
  detalharMulta: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private globalService: GlobalService, private messageService: MessageService,
    private multaService: MultaService) { }

  ngOnInit() {
    this.buscarListaMulta();
    this.globalService.convertCalendario();
  }

  recebeIdMulta(idMulta) {
    this.idMulta = idMulta;
  }
  selecionarMulta(multa) {
    this.multa = multa;
  }

  modalMulta(modal: string) {
    if (modal == "formulario") {
      this.formularioMulta = true;
    } else if (modal == "alterar") {
      this.alterarMulta = true;
    } else if (modal == "detalhar") {
      this.detalharMulta = true;
    }
  }

  buscarListaMulta() {
    if (this.filtroMulta.dataInicio != null && this.filtroMulta.dataFim != null) {
      this.multaService.getMulta(this.filtroMulta.dataInicio.toString(), this.filtroMulta.dataFim.toString())
        .subscribe((res: any) => {
          this.multaService.listaMulta = res.map(this.globalService.converteData) as MultaModels[];
          if (this.multaService.listaMulta.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroMulta.dataInicio != null && this.filtroMulta.dataFim == null) {
      this.multaService.getMultaDataInicio(this.filtroMulta.dataInicio.toString())
        .subscribe((res: any) => {
          this.multaService.listaMulta = res.map(this.globalService.converteData) as MultaModels[];
          if (this.multaService.listaMulta.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroMulta.dataInicio == null && this.filtroMulta.dataFim != null) {
      this.multaService.getMultaDataFim(this.filtroMulta.dataFim.toString())
        .subscribe((res: any) => {
          this.multaService.listaMulta = res.map(this.globalService.converteData) as MultaModels[];
          if (this.multaService.listaMulta.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroMulta.dataInicio == null && this.filtroMulta.dataFim == null) {
      this.globalService.mensagem('warn', 'Alerta:', 'A data inicio ou data fim deve ser informada.');
    }
  }

  aoSalvarFormularioMulta(sucesso: boolean) {
    if (sucesso == true) {
      this.formularioMulta = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de multa realizado com sucesso.');
      this.buscarListaMulta();
    } else {
      this.formularioMulta = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao cadastrar o multa.');
    }
  }

  aoAlterarMulta(sucesso: boolean) {
    if (sucesso == true) {
      this.alterarMulta = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de multa realizado com sucesso.');
      this.buscarListaMulta();
    } else {
      this.alterarMulta = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao alterar o multa.');
    }

  }

  excluirMulta(_id: string) {
    this.multaService.excluirMulta(_id)
      .subscribe(res => {
        this.globalService.mensagem('success', 'Sucesso:', 'Multa excluido com sucesso.');
        this.buscarListaMulta();
      }, (error) => {
        this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do multa');
      }
      );
  }

  confirmacaoExclusaoMulta() {
    this.messageService.clear();
    this.messageService.add({
      key: 'modalConfirmacaoExclusao', sticky: true, severity: 'warn',
      summary: 'Tem certeza que deseja excluir o multa?', detail: 'Confirme para prosseguir!'
    });
  }

  aoConfirmarExclusaoMulta(sucesso: boolean) {
    if (sucesso == true) {
      this.excluirMulta(this.idMulta);
      this.messageService.clear('modalConfirmacaoExclusao');
    } else {
      this.messageService.clear('modalConfirmacaoExclusao');
    }
  }



}