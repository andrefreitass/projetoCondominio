import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//Meus imports
import { AdvertenciaService } from './../advertencia.service';
import { AdvertenciaModels } from '../../models/advertencia-models';
import { GlobalService } from './../../uteis/global.service';

//imports do Primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message, ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'listar-advertencia',
  templateUrl: './listar-advertencia.component.html',
  styleUrls: ['./listar-advertencia.component.css']
})
export class ListarAdvertenciaComponent implements OnInit {

  filtroAdvertencia = { dataInicio: new Date(), dataFim: new Date() };
  advertencia = {};
  idAdvertencia: any;
  formularioAdvertencia: boolean = false;
  alterarAdvertencia: boolean = false;
  detalharAdvertencia: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private globalService: GlobalService, private messageService: MessageService,
    private advertenciaService: AdvertenciaService) { }

  ngOnInit() {
    this.buscarListaAdvertencia();
    this.globalService.convertCalendario();
  }

  recebeIdAdvertencia(idAdvertencia) {
    this.idAdvertencia = idAdvertencia;
  }
  selecionarAdvertencia(advertencia) {
    this.advertencia = advertencia;
  }

  modalAdvertencia(modal: string) {
    if (modal == "formulario") {
      this.formularioAdvertencia = true;
    } else if (modal == "alterar") {
      this.alterarAdvertencia = true;
    } else if (modal == "detalhar") {
      this.detalharAdvertencia = true;
    }
  }

  buscarListaAdvertencia() {
    if (this.filtroAdvertencia.dataInicio != null && this.filtroAdvertencia.dataFim != null) {
      this.advertenciaService.getAdvertencia(this.filtroAdvertencia.dataInicio.toString(), this.filtroAdvertencia.dataFim.toString())
        .subscribe((res: any) => {
          this.advertenciaService.listaAdvertencia = res.map(this.globalService.converteData) as AdvertenciaModels[];
          if (this.advertenciaService.listaAdvertencia.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroAdvertencia.dataInicio != null && this.filtroAdvertencia.dataFim == null) {
      this.advertenciaService.getAdvertenciaDataInicio(this.filtroAdvertencia.dataInicio.toString())
        .subscribe((res: any) => {
          this.advertenciaService.listaAdvertencia = res.map(this.globalService.converteData) as AdvertenciaModels[];
          if (this.advertenciaService.listaAdvertencia.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroAdvertencia.dataInicio == null && this.filtroAdvertencia.dataFim != null) {
      this.advertenciaService.getAdvertenciaDataFim(this.filtroAdvertencia.dataFim.toString())
        .subscribe((res: any) => {
          this.advertenciaService.listaAdvertencia = res.map(this.globalService.converteData) as AdvertenciaModels[];
          if (this.advertenciaService.listaAdvertencia.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroAdvertencia.dataInicio == null && this.filtroAdvertencia.dataFim == null) {
      this.globalService.mensagem('warn', 'Alerta:', 'A data inicio ou data fim deve ser informada.');
    }
  }

  aoSalvarFormularioAdvertencia(sucesso: boolean) {
    if (sucesso == true) {
      this.formularioAdvertencia = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de advertencia realizado com sucesso.');
      this.buscarListaAdvertencia();
    } else {
      this.formularioAdvertencia = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao cadastrar o advertencia.');
    }
  }

  aoAlterarAdvertencia(sucesso: boolean) {
    if (sucesso == true) {
      this.alterarAdvertencia = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de advertencia realizado com sucesso.');
      this.buscarListaAdvertencia();
    } else {
      this.alterarAdvertencia = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao alterar o advertencia.');
    }

  }

  excluirAdvertencia(_id: string) {
    this.advertenciaService.excluirAdvertencia(_id)
      .subscribe(res => {
        this.globalService.mensagem('success', 'Sucesso:', 'Advertencia excluido com sucesso.');
        this.buscarListaAdvertencia();
      }, (error) => {
        this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do advertencia');
      }
      );
  }

  confirmacaoExclusaoAdvertencia() {
    this.messageService.clear();
    this.messageService.add({
      key: 'modalConfirmacaoExclusao', sticky: true, severity: 'warn',
      summary: 'Tem certeza que deseja excluir o advertencia?', detail: 'Confirme para prosseguir!'
    });
  }

  aoConfirmarExclusaoAdvertencia(sucesso: boolean) {
    if (sucesso == true) {
      this.excluirAdvertencia(this.idAdvertencia);
      this.messageService.clear('modalConfirmacaoExclusao');
    } else {
      this.messageService.clear('modalConfirmacaoExclusao');
    }
  }



}