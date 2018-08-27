import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

//Meus imports
import { LazerService } from '../lazer.service';
import { LazerModels } from '../../models/lazer-models';

//Imports
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
  selector: 'formulario-lazer',
  templateUrl: './formulario-lazer.component.html',
  styleUrls: ['./formulario-lazer.component.css']
})
export class FormularioLazerComponent implements OnInit {

  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  lazer: LazerModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private lazerService: LazerService) { }

  ngOnInit() {   
    this.lazer = new LazerModels();
  }


  salvarLazer(lazer) {    
    this.lazerService.InserirLazer(lazer.value)
      .subscribe(res => {        
        this.resetarFormulario(lazer);
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(lazer) {
    if (lazer) {
      lazer.reset();
      this.lazer = new LazerModels();
    }
  }

}
