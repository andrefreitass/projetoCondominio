import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LazerService } from '../lazer.service';
import { LazerModel } from '../../models/lazer-model';


@Component({
  selector: 'formulario-lazer',
  templateUrl: './formulario-lazer.component.html',
  styleUrls: ['./formulario-lazer.component.css']
})
export class FormularioLazerComponent implements OnInit {

 
  constructor(private lazerService: LazerService) { }

  ngOnInit() {
    this.lazerService.getlazer();
  }


  salvarLazer(form?: NgForm) {
    console.log(form.value);
      this.lazerService.InserirLazer(form.value)
      .subscribe(res => {
        this.lazerService.getlazer();
        this.resetForm(form);
      });

    
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.lazerService.selecionaLazer= new LazerModel();
    }
  }


}
