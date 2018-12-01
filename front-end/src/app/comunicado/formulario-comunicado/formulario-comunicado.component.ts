import { PautaService } from './../../pauta/pauta.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { ComunicadoService } from './../comunicado.service';
import { ComunicadoModels } from '../../models/comunicado-models';
import { GlobalService } from './../../uteis/global.service';

@Component({
  selector: 'formulario-comunicado',
  templateUrl: './formulario-comunicado.component.html',
  styleUrls: ['./formulario-comunicado.component.css']
})
export class FormularioComunicadoComponent implements OnInit {

  msgs: Message[] = [];
  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  comunicadoForm: FormGroup;
  comunicado: ComunicadoModels;

  pautaAssuntos: string;
  filtroPautaAssuntos: any[];  
  listaPautaAssuntos: string[];
  //listaPautaAssuntos: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private comunicadoService: ComunicadoService, private globalService: GlobalService,
    private pautaService:PautaService,private fb: FormBuilder) { }

  ngOnInit() {
    this.comunicado = new ComunicadoModels();
    this.globalService.convertCalendario();
    this.pautaService.getListaPautaAssunto();
    this.comunicadoForm = this.fb.group({
      'data': new FormControl('', Validators.required),
      'titulo': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      'descricao': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      'pautaAssuntos': new FormControl(''),
    });
  }

  ocultarExibirDiv(nomeDiv){
    if(nomeDiv === "formulario"){
      document.getElementById("pauta").style.display = "none";
      document.getElementById("formulario").style.display = "block";
    }else if(nomeDiv === "pauta"){
      document.getElementById("formulario").style.display = "none";
      document.getElementById("pauta").style.display = "block";
    }
    
  }

  buscaPautaAssuntos(event) {
    this.filtroPautaAssuntos = [];
    for(let i = 0; i < this.pautaService.getPautaDataFim.length; i++) {
        let pautaAssuntos = this.pautaService.getPautaDataFim[i];
            this.filtroPautaAssuntos.push(pautaAssuntos);
            console.log(this.filtroPautaAssuntos);
       
    }
}

  salvarComunicado(comunicado) {
    this.comunicadoService.inserirComunicado(comunicado.value)
      .subscribe(res => {
        this.resetarFormulario(comunicado);
        this.aoSalvar.emit(true);
      }, error => {
        this.aoSalvar.emit(false);
        this.resetarFormulario(comunicado);
      }
      );
  }

  resetarFormulario(comunicado) {
    if (comunicado) {
      comunicado.reset();
      this.comunicado = new ComunicadoModels();
    }
  }

  buscaListaPauta() {
    this.pautaService.getListaPautaAssunto();
  }

  buscaListaEnquete() {

  }

}