import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Meus imports
import { LazerService } from '../lazer.service';
import { LazerModel } from './../../models/lazer-model';

// Imports primeng 
import { MessageService } from 'primeng/components/common/messageservice';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'listar-lazer',
  templateUrl: './listar-lazer.component.html',
  styleUrls: ['./listar-lazer.component.css']
})
export class ListarLazerComponent implements OnInit {

  lazer = {};
  formularioLazer: boolean = false;
  alterarLazer: boolean = false;
  detalharLazer: boolean = false;
  msgs: Message[] = [];

  constructor(private lazerService: LazerService) { }

  ngOnInit() {
    this.buscarListaLazer();
  }

  modalLazer(modal: string) {
    if (modal == "formulario") {
      this.formularioLazer = true;
    } else if (modal == "alterar") {
      this.alterarLazer = true;
    } else if (modal == "detalhar") {
      this.detalharLazer = true;
    }

  }

  buscarListaLazer() {
    this.lazerService.getlazer()
      .subscribe(res => {
        this.lazerService.listaLazer = res as LazerModel[];
      });
  }


  atualizarLazer(lazer: LazerModel) {
    this.lazerService.selecionaLazer = lazer;
  }

  excluirLazer(_id: string, form: NgForm) {
    if (confirm('Deseja excluir o lazer?')) {
      this.lazerService.excluirLazer(_id)
        .subscribe(res => {
          this.buscarListaLazer();
          // this.resetForm(form);
        });
    }
  }

  // resetForm(form?: NgForm) {
  //   if (form) {
  //     form.reset();
  //     this.lazerService.selecionaLazer= new Lazer();
  //   }
  // }


}
