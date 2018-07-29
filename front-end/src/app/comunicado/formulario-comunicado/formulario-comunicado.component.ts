import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

import { ComunicadoService } from './../comunicado.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { ComunicadoModels } from '../../models/comunicado-models';

@Component({
  selector: 'formulario-comunicado',
  templateUrl: './formulario-comunicado.component.html',
  styleUrls: ['./formulario-comunicado.component.css']
})
export class FormularioComunicadoComponent implements OnInit {
  
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private comunicadoService: ComunicadoService) { }

  ngOnInit() {
    this.comunicadoService.getComunicado();
  }


  salvarComunicado(form?: NgForm) {
    console.log(form.value);
    this.comunicadoService.inserirComunicado(form.value)
      .subscribe(res => {
        this.comunicadoService.getComunicado();
        this.resetForm(form);
      })
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.comunicadoService.comunicado = new ComunicadoModels();
    }
  }

}

