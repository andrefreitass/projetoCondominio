import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

//Meus imports 
import { AdvertenciaService } from './../advertencia.service';
import { AdvertenciaModels } from '../../models/advertencia-models';
import { GlobalService } from './../../uteis/global.service';

//Imports do Primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'formulario-advertencia',
  templateUrl: './formulario-advertencia.component.html',
  styleUrls: ['./formulario-advertencia.component.css']
})
export class FormularioAdvertenciaComponent implements OnInit {
  
  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  advertencia: AdvertenciaModels;
  consultarPauta: boolean = false;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private advertenciaService: AdvertenciaService, private globalService: GlobalService) { }

  ngOnInit() {   
    this.advertencia = new AdvertenciaModels();
    this.globalService.convertCalendario();
  }


  salvarAdvertencia(advertencia) {    
    this.advertenciaService.inserirAdvertencia(advertencia.value)
      .subscribe(res => {        
        this.resetarFormulario(advertencia);
        this.aoSalvar.emit(true);
      }, error => {
        this.aoSalvar.emit(false);
        this.resetarFormulario(advertencia);
      } 
    );
  }

  resetarFormulario(advertencia) {
    if (advertencia) {
      advertencia.reset();
      this.advertencia = new AdvertenciaModels();
    }
  }

  modalAdvertencia(modal: string) {
    if (modal == "consultarPauta"){
      this.consultarPauta = true;
    }
  }

}

