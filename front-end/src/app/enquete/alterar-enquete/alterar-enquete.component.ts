import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { EnqueteService } from '../enquete.service';
import { GlobalService } from '../../uteis/global.service';


@Component({
  selector: 'alterar-enquete',
  templateUrl: './alterar-enquete.component.html',
  styleUrls: ['./alterar-enquete.component.css']
})
export class AlterarEnqueteComponent implements OnInit {

  enqueteForm: FormGroup;
  @Input() enquete = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private enqueteService: EnqueteService, private globalService: GlobalService,private fb: FormBuilder) {            
     }

  ngOnInit() { 
    this.enqueteForm = this.fb.group({
      'data': new FormControl('', Validators.required),
      'titulo': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)])),
      'assuntos': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)]))     
  });   
  }

atualizarEnquete(enquete) {   
    if(enquete) {          
      this.enqueteService.atualizarEnquete(enquete)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}
