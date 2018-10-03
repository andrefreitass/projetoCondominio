import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Meus imports
import { LazerService } from './../lazer.service';
import { LazerModels } from '../../models/lazer-models';
import { GlobalService } from './../../uteis/global.service';

//imports do primeng
import { Message, ConfirmationService, MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {
  
  filtroLazer = { dataInicio: new Date(), dataFim: new Date() };
  lazer = {};
  idLazer: any;
  formularioLazer: boolean = false;
  alterarLazer: boolean = false;
  detalharLazer: boolean = false;
  msgs: Message[] = [];
  private menu: MenuItem[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private globalService: GlobalService, private messageService: MessageService,
    private lazerService: LazerService) { }

  ngOnInit() {
    this.buscarListaLazer();
    this.globalService.convertCalendario();
  }

  recebeIdLazer(idLazer) {
    this.idLazer = idLazer;
  }
  selecionarLazer(lazer) {
    this.lazer = lazer;
  }

  modalLazer(modal: string) {
    if (modal == "formulario") {
      this.formularioLazer = true;
    } else if (modal == "alterar") {
      this.alterarLazer = true;
    } else if (modal == "detalhar") {
      this.detalharLazer = true;
    }
  }

  buscarListaLazer() {
    if (this.filtroLazer.dataInicio != null && this.filtroLazer.dataFim != null) {
      this.lazerService.getLazer(this.filtroLazer.dataInicio.toString(), this.filtroLazer.dataFim.toString())
        .subscribe((res: any) => {
          this.lazerService.listaLazer = res.map(this.globalService.converteData) as LazerModels[];
          if (this.lazerService.listaLazer.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroLazer.dataInicio != null && this.filtroLazer.dataFim == null) {
      this.lazerService.getLazerDataInicio(this.filtroLazer.dataInicio.toString())
        .subscribe((res: any) => {
          this.lazerService.listaLazer = res.map(this.globalService.converteData) as LazerModels[];
          if (this.lazerService.listaLazer.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroLazer.dataInicio == null && this.filtroLazer.dataFim != null) {
      this.lazerService.getLazerDataFim(this.filtroLazer.dataFim.toString())
        .subscribe((res: any) => {
          this.lazerService.listaLazer = res.map(this.globalService.converteData) as LazerModels[];
          if (this.lazerService.listaLazer.length == 0) {
            this.globalService.mensagem('warn', 'Alerta:', 'Nenhum Registro Encontrado.');
          }
        });
    } else if (this.filtroLazer.dataInicio == null && this.filtroLazer.dataFim == null) {
      this.globalService.mensagem('warn', 'Alerta:', 'A data inicio ou data fim deve ser informada.');
    }
  }

  aoSalvarFormularioLazer(sucesso: boolean) {
    if (sucesso == true) {
      this.formularioLazer = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Cadastro de lazer realizado com sucesso.');
      this.buscarListaLazer();
    } else {
      this.formularioLazer = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao cadastrar o lazer.');
    }
  }

  aoAlterarLazer(sucesso: boolean) {
    if (sucesso == true) {
      this.alterarLazer = false;
      this.globalService.mensagem('success', 'Sucesso:', 'Alteracao de lazer realizado com sucesso.');
      this.buscarListaLazer();
    } else {
      this.alterarLazer = false;
      this.globalService.mensagem('error', 'Erro:', 'Erro ao alterar o lazer.');
    }

  }

  excluirLazer(_id: string) {
    this.lazerService.excluirLazer(_id)
      .subscribe(res => {
        this.globalService.mensagem('success', 'Sucesso:', 'Lazer excluido com sucesso.');
        this.buscarListaLazer();
      }, (error) => {
        this.globalService.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do lazer');
      }
      );
  }

  confirmacaoExclusaoLazer() {
    this.messageService.clear();
    this.messageService.add({
      key: 'modalConfirmacaoExclusao', sticky: true, severity: 'warn',
      summary: 'Tem certeza que deseja excluir o lazer?', detail: 'Confirme para prosseguir!'
    });
  }

  aoConfirmarExclusaoLazer(sucesso: boolean) {
    if (sucesso == true) {
      this.excluirLazer(this.idLazer);
      this.messageService.clear('modalConfirmacaoExclusao');
    } else {
      this.messageService.clear('modalConfirmacaoExclusao');
    }
  }



}