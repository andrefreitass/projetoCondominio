import { EnqueteService } from './../enquete.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message, MessageService } from '../../../../node_modules/primeng/api';
import { EnqueteModels } from '../../models/enquete-models';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';
import { GlobalService } from '../../uteis/global.service';


@Component({
  selector: 'formulario-enquete',
  templateUrl: './formulario-enquete.component.html',
  styleUrls: ['./formulario-enquete.component.css']
})
export class FormularioEnqueteComponent implements OnInit {

  msgs: Message[] = [];

  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();

  enquete: EnqueteModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private enqueteService: EnqueteService, private globalService: GlobalService) { }

  ngOnInit() {   
    this.enquete = new EnqueteModels();
  }

  salvarEnquete(enquete) {      
    this.enqueteService.inserirEnquete(enquete.value)
      .subscribe(res => {        
        this.resetarFormulario(enquete);
        this.aoSalvar.emit(true);
      }, error => this.aoSalvar.emit(false))
  }

  resetarFormulario(enquete) {
    if (enquete) {
      enquete.reset();
      this.enquete = new EnqueteModels();
    }
  }

}

