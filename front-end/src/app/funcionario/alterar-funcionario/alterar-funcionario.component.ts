import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { FuncionarioService } from './../funcionario.service';
import { FuncionarioModels } from '../../models/funcionario-models';

@Component({
  selector: 'alterar-funcionario',
  templateUrl: './alterar-funcionario.component.html',
  styleUrls: ['./alterar-funcionario.component.css']
})
export class AlterarFuncionarioComponent implements OnInit {

  @Input() funcionario = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private funcionarioService: FuncionarioService) {
            
     }

  ngOnInit() {    
  }

atualizarFuncionario(funcionario) {   
    if(funcionario) {          
      this.funcionarioService.atualizarFuncionario(funcionario)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}