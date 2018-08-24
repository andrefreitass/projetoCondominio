import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AdvertenciaService } from './../advertencia.service';
import { AdvertenciaModels } from '../../models/advertencia-models';

@Component({
  selector: 'alterar-advertencia',
  templateUrl: './alterar-advertencia.component.html',
  styleUrls: ['./alterar-advertencia.component.css']
})
export class AlterarAdvertenciaComponent implements OnInit {

  @Input() advertencia = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private advertenciaService: AdvertenciaService) {
            
     }

  ngOnInit() {    
  }

atualizarAdvertencia(advertencia) {   
    if(advertencia) {          
      this.advertenciaService.atualizarAdvertencia(advertencia)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}
