import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

// Meus imports
import { MultaService } from './../multa.service';
import { MultaModels } from '../../models/multa-models';
import { GlobalService } from '../../uteis/global.service';

// Imports do primeng
import { Message } from 'primeng/api';

@Component({
  selector: 'alterar-multa',
  templateUrl: './alterar-multa.component.html',
  styleUrls: ['./alterar-multa.component.css']
})
export class AlterarMultaComponent implements OnInit {

  @Input() multa = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private multaService: MultaService, private globalService: GlobalService) {
            
     }

  ngOnInit() {  
    this.globalService.convertCalendario();   
  }

atualizarMulta(multa) {   
    if(multa) {          
      this.multaService.atualizarMulta(multa)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}