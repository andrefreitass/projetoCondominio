import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';

import { LazerService } from '../lazer.service';
import { LazerModel } from './../../models/lazer-model';


@Component({
  selector: 'alterar-lazer',
  templateUrl: './alterar-lazer.component.html',
  styleUrls: ['./alterar-lazer.component.css']
})
export class AlterarLazerComponent implements OnInit {

  lazer = {};
  
  constructor(private lazerService: LazerService, private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  salvarLazer(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.lazerService.atualizarLazer(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.lazerService.getlazer();
          console.log('atualizado com sucesso');
        });
    } 
    
  }
 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.lazerService.selecionaLazer= new LazerModel();
    }
  }

  }
