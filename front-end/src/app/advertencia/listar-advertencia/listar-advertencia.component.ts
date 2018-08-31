import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//Meus imports
import { AdvertenciaService } from './../advertencia.service';
import { AdvertenciaModels } from '../../models/advertencia-models';

//Meus imports
import { MessageService } from 'primeng/components/common/messageservice';
import { Message, ConfirmationService } from 'primeng/api';

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

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private confirmationService: ConfirmationService, private advertenciaService: AdvertenciaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.buscarListaAdvertencia();
  }

  recebeIdAdvertencia(idAdvertencia) {
    this.idAdvertencia = idAdvertencia;
  }

  selecionarAdvertencia(advertencia) {
    this.advertencia = advertencia;
  }

  converteDataAdvertencia = (r: any) => ({ ...r, data: new Date(r.data) });

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
    this.advertenciaService.getAdvertencia(this.filtroAdvertencia.dataInicio.toString(), this.filtroAdvertencia.dataFim.toString())
      .subscribe((res: any) => {
        this.advertenciaService.listaAdvertencia = res.map(this.converteDataAdvertencia) as AdvertenciaModels[];
      });
  }

  aoSalvarFormularioAdvertencia(sucesso: boolean) {
    if (sucesso == true) {
      this.formularioAdvertencia = false;
      this.mensagem('success', 'Sucesso:', 'Cadastro de advertencia realizado com sucesso.');
      this.buscarListaAdvertencia();
    } else {
      this.formularioAdvertencia = false;
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar o cadastro da advertencia.');
    }
  }

  aoAlterarAdvertencia(sucesso: boolean) {
    if (sucesso == true) {
      this.alterarAdvertencia = false;
      this.mensagem('success', 'Sucesso:', 'Alteracao de advertencia realizado com sucesso.');
      this.buscarListaAdvertencia();
    } else {
      this.formularioAdvertencia = false;
      this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a alteracao da advertencia.');
    }
  }

  excluirAdvertencia(_id: string) {
    this.advertenciaService.excluirAdvertencia(_id)
      .subscribe(res => {
        this.mensagem('success', 'Sucesso:', 'Advertencia excluido com sucesso.');
        this.buscarListaAdvertencia();
      }, (error) => {
        this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao do advertencia');
      }
      );
  }

  confirmaExclusaoAdvertencia() {
    this.messageService.clear();
    this.messageService.add({
      key: 'modalConfirmacaoExclusao', sticky: true, severity: 'warn',
      summary: 'Tem certeza que deseja excluir o comunicado?', detail: 'Confirme para prosseguir'
    });
  }

  aoConfirmarExclusaoComunicado(sucesso: boolean) {
    if (sucesso == true) {
      this.excluirAdvertencia(this.idAdvertencia);
      this.messageService.clear('modalConfirmacaoExclusao');
    } else {
      this.messageService.clear('modalConfirmacaoExclusao');
    }
  }


  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {
    this.messageService.add({ severity: tipoSeverity, summary: titulo, detail: txtMensagem });
  }
}