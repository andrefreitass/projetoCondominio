import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ComunicadoService } from './../comunicado.service';
import { ComunicadoModels } from '../../models/comunicado-models';

@Component({
  selector: 'alterar-comunicado',
  templateUrl: './alterar-comunicado.component.html',
  styleUrls: ['./alterar-comunicado.component.css']
})
export class AlterarComunicadoComponent implements OnInit {

  @Input() comunicado = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private comunicadoService: ComunicadoService) {
            
     }

  ngOnInit() {    
  }

atualizarComunicado(comunicado) {   
    if(comunicado) {          
      this.comunicadoService.atualizarComunicado(comunicado)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}