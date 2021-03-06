import { GlobalService } from './../../uteis/global.service';
import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService, MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

import { ComunicadoService } from './../comunicado.service';
import { ComunicadoModels } from '../../models/comunicado-models';

@Component({
  selector: 'listar-comunicado',
  templateUrl: './listar-comunicado.component.html',
  styleUrls: ['./listar-comunicado.component.css']
})
export class ListarComunicadoComponent implements OnInit {

  filtroComunicado = { dataInicio: new Date(), dataFim: new Date() };
  comunicado = {};
  idComunicado: any;
  formularioComunicado: boolean = false;
  alterarComunicado: boolean = false;
  detalharComunicado: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private globalService: GlobalService, private messageService: MessageService,
    private comunicadoService: ComunicadoService) { }

  ngOnInit() {
    this.buscarListaComunicado();
    this.globalService.convertCalendario();
  }

  recebeIdComunicado(idComunicado) {
    this.idComunicado = idComunicado;
  }
  selecionarComunicado(comunicado) {
    this.comunicado = comunicado;
  }

  modalComunicado(modal: string) {
    if (modal == "formulario") {
      this.formularioComunicado = true;
    } else if (modal == "alterar") {
      this.alterarComunicado = true;
    } else if (modal == "detalhar") {
      this.detalharComunicado = true;
    }
  }

  buscarListaComunicado() {
    if (this.filtroComunicado.dataInicio != null && this.filtroComunicado.dataFim != null) {
      this.comunicadoService.getComunicado(this.filtroComunicado.dataInicio.toString(), this.filtroComunicado.dataFim.toString())
        .subscribe((res: any) => {
          this.comunicadoService.listaComunicado = res.map(this.globalService.converteData) as ComunicadoModels[];
          if (this.comunicadoService.listaComunicado.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroComunicado.dataInicio != null && this.filtroComunicado.dataFim == null) {
      this.comunicadoService.getComunicadoDataInicio(this.filtroComunicado.dataInicio.toString())
        .subscribe((res: any) => {
          this.comunicadoService.listaComunicado = res.map(this.globalService.converteData) as ComunicadoModels[];
          if (this.comunicadoService.listaComunicado.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroComunicado.dataInicio == null && this.filtroComunicado.dataFim != null) {
      this.comunicadoService.getComunicadoDataFim(this.filtroComunicado.dataFim.toString())
        .subscribe((res: any) => {
          this.comunicadoService.listaComunicado = res.map(this.globalService.converteData) as ComunicadoModels[];
          if (this.comunicadoService.listaComunicado.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroComunicado.dataInicio == null && this.filtroComunicado.dataFim == null) {
      this.globalService.mensagem('warn', 'Alerta:', 'A data inicio ou data fim deve ser informada.');
    }
  }

  aoSalvarFormularioComunicado(sucesso: boolean) {
    if (sucesso == true) {
      this.formularioComunicado = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de comunicado realizado com sucesso.');
      this.buscarListaComunicado();
    } else {
      this.formularioComunicado = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao cadastrar o comunicado.');
    }
  }

  aoAlterarComunicado(sucesso: boolean) {
    if (sucesso == true) {
      this.alterarComunicado = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de comunicado realizado com sucesso.');
      this.buscarListaComunicado();
    } else {
      this.alterarComunicado = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao alterar o comunicado.');
    }

  }

  excluirComunicado(_id: string) {
    this.comunicadoService.excluirComunicado(_id)
      .subscribe(res => {
        this.globalService.mensagem('success', 'Sucesso:', 'Comunicado excluido com sucesso.');
        this.buscarListaComunicado();
      }, (error) => {
        this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do comunicado');
      }
      );
  }

  confirmacaoExclusaoComunicado() {
    this.messageService.clear();
    this.messageService.add({
      key: 'modalConfirmacaoExclusao', sticky: true, severity: 'warn',
      summary: 'Tem certeza que deseja excluir o comunicado?', detail: 'Confirme para prosseguir!'
    });
  }

  aoConfirmarExclusaoComunicado(sucesso: boolean) {
    if (sucesso == true) {
      this.excluirComunicado(this.idComunicado);
      this.messageService.clear('modalConfirmacaoExclusao');
    } else {
      this.messageService.clear('modalConfirmacaoExclusao');
    }
  }



}