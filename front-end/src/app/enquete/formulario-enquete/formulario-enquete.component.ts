import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Message, MessageService } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

import { EnqueteModels } from '../../models/enquete-models';
import { EnqueteService } from './../enquete.service';
import { GlobalService } from '../../uteis/global.service';

@Component({
  selector: 'formulario-enquete',
  templateUrl: './formulario-enquete.component.html',
  styleUrls: ['./formulario-enquete.component.css']
})
export class FormularioEnqueteComponent implements OnInit {

  enqueteForm: FormGroup;
  msgs: Message[] = [];
  @Output() aoSalvar: EventEmitter<boolean> = new EventEmitter<boolean>();
  enquete: EnqueteModels;

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,
    private enqueteService: EnqueteService, private globalService: GlobalService,private fb: FormBuilder) { }

  ngOnInit() {   
    this.enquete = new EnqueteModels();
    this.enqueteForm = this.fb.group({
      'data': new FormControl('', Validators.required),
      'titulo': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)])),
      'assuntos': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)]))
     
  });
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

