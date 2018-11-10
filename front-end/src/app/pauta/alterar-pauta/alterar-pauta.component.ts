import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { PautaService } from '../pauta.service';
import { GlobalService } from '../../uteis/global.service';

@Component({
  selector: 'alterar-pauta',
  templateUrl: './alterar-pauta.component.html',
  styleUrls: ['./alterar-pauta.component.css']
})
export class AlterarPautaComponent implements OnInit {
  
  pautaForm: FormGroup;
  @Input() pauta = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private pautaService: PautaService, private globalService: GlobalService,private fb: FormBuilder) { }

  ngOnInit() {
    this.pautaForm = this.fb.group({
      'data': new FormControl('', Validators.required),
      'local': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)])),
      'assuntos': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)]))
     
  });
  }

  atualizarPauta(pauta){
    if(pauta){
      this.pautaService.atualizarPauta(pauta)
        .subscribe(res => {
          this.aoAlterar.emit(true);
        }, error => this.aoAlterar.emit(false));
    }
  }
}