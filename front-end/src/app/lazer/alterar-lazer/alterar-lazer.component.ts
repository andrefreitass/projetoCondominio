import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { LazerService } from './../lazer.service';
import { LazerModels } from '../../models/lazer-models';

@Component({
  selector: 'alterar-lazer',
  templateUrl: './alterar-lazer.component.html',
  styleUrls: ['./alterar-lazer.component.css']
})
export class AlterarLazerComponent implements OnInit {

  @Input() lazer = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private lazerService: LazerService) {
            
     }

  ngOnInit() {    
  }

atualizarLazer(lazer) {   
    if(lazer) {          
      this.lazerService.atualizarLazer(lazer)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}