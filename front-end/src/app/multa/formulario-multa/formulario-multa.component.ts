import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Meus imports
import { MultaService } from './../multa.service';
import { MultaModels } from '../../models/multa-models';
import { GlobalService } from './../../uteis/global.service';

// Imports do primeng
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';


@Component({
  selector: 'formulario-multa',
  templateUrl: './formulario-multa.component.html',
  styleUrls: ['./formulario-multa.component.css']
})
export class FormularioMultaComponent implements OnInit {
  
  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  multa: MultaModels;
  consultarPauta: boolean = false;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private multaService: MultaService, private globalService: GlobalService) { }

  ngOnInit() {   
    this.multa = new MultaModels();
    this.globalService.convertCalendario();
  }


  salvarMulta(multa) {    
    this.multaService.inserirMulta(multa.value)
      .subscribe(res => {        
        this.resetarFormulario(multa);
        this.aoSalvar.emit(true);
      }, error => {
        this.aoSalvar.emit(false);
        this.resetarFormulario(multa);
      } 
    );
  }

  resetarFormulario(multa) {
    if (multa) {
      multa.reset();
      this.multa = new MultaModels();
    }
  }

  modalMulta(modal: string) {
    if (modal == "consultarPauta"){
      this.consultarPauta = true;
    }
  }

}

