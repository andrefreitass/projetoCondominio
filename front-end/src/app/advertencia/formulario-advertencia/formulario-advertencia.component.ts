import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

import { AdvertenciaService } from './../advertencia.service';
import { AdvertenciaModels } from '../../models/advertencia-models';

@Component({
  selector: 'formulario-advertencia',
  templateUrl: './formulario-advertencia.component.html',
  styleUrls: ['./formulario-advertencia.component.css']
})
export class FormularioAdvertenciaComponent implements OnInit {
  
  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  advertencia: AdvertenciaModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private advertenciaService: AdvertenciaService) { }

  ngOnInit() {   
    this.advertencia = new AdvertenciaModels();
  }


  salvarAdvertencia(advertencia) {    
    this.advertenciaService.inserirAdvertencia(advertencia.value)
      .subscribe(res => {        
        this.resetarFormulario(advertencia);
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(advertencia) {
    if (advertencia) {
      advertencia.reset();
      this.advertencia = new AdvertenciaModels();
    }
  }

}
