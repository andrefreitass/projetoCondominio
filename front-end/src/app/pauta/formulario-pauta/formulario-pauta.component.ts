import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message, MessageService } from '../../../../node_modules/primeng/api';
import { PautaModels } from '../../models/pauta-models';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { PautaService } from '../pauta.service';
import { Router } from '../../../../node_modules/@angular/router';
import { GlobalService } from '../../uteis/global.service';

@Component({
  selector: 'formulario-pauta',
  templateUrl: './formulario-pauta.component.html',
  styleUrls: ['./formulario-pauta.component.css']
})
export class FormularioPautaComponent implements OnInit {

  msgs: Message[] = [];
  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  pauta: PautaModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private pautaService: PautaService, private globalService: GlobalService) { }

  ngOnInit() {
    this.pauta = new PautaModels();
  }

  salvarPauta(pauta){
    this.pautaService.inserirPauta(pauta.value)
    .subscribe(res => {
      this.resetarFormulario(pauta);
      this.aoSalvar.emit(true);
    }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(pauta){
    if(pauta){
      pauta.reset();
      this.pauta = new PautaModels();
    }
  }
}
