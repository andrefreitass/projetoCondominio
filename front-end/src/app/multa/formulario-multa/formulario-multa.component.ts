import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

import { MultaService } from './../multa.service';
import { MultaModels } from '../../models/multa-models';

@Component({
  selector: 'formulario-multa',
  templateUrl: './formulario-multa.component.html',
  styleUrls: ['./formulario-multa.component.css']
})
export class FormularioMultaComponent implements OnInit {
  
  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  multa: MultaModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private multaService: MultaService) { }

  ngOnInit() {   
    this.multa = new MultaModels();
  }


  salvarMulta(multa) {    
    this.multaService.inserirMulta(multa.value)
      .subscribe(res => {        
        this.resetarFormulario(multa);
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(multa) {
    if (multa) {
      multa.reset();
      this.multa = new MultaModels();
    }
  }

}

