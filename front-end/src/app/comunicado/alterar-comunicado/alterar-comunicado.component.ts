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
  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private comunicadoService: ComunicadoService) {
            
     }

  ngOnInit() {    
  }
/** 
  atualizarComunicado(id) {
    this.comunicadoService.atualizarComunicado(id) 
      .subscribe(res => {        
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
    ;    
  }
*/
atualizarComunicado(form?) {    
    if(form.value._id) {
      this.comunicadoService.atualizarComunicado(form.value)      
        .subscribe(res => {
          this.aoSalvar.emit(true);
          this.resetForm(form);
          this.comunicadoService.getComunicado();          
          console.log('atualizado com sucesso');
        });
    } 
    
  }
 
  resetForm(form?) {
    if (form) {
      form.reset();
      this.comunicadoService.comunicado = new ComunicadoModels();      
    }
  }


}