import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Message, MessageService } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

import { PautaModels } from '../../models/pauta-models';
import { PautaService } from '../pauta.service';
import { GlobalService } from '../../uteis/global.service';

@Component({
  selector: 'formulario-pauta',
  templateUrl: './formulario-pauta.component.html',
  styleUrls: ['./formulario-pauta.component.css']
})
export class FormularioPautaComponent implements OnInit {

  pautaForm: FormGroup;
  msgs: Message[] = [];
  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  pauta: PautaModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private pautaService: PautaService, private globalService: GlobalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.pauta = new PautaModels();
    this.pautaForm = this.fb.group({
      'data': new FormControl('', Validators.required),
      'local': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)])),
      'assuntos': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)]))
     
  });
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
