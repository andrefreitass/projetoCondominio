import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ComunicadoService } from './../comunicado.service';

@Component({
  selector: 'alterar-comunicado',
  templateUrl: './alterar-comunicado.component.html',
  styleUrls: ['./alterar-comunicado.component.css']
})
export class AlterarComunicadoComponent implements OnInit {

  @Input() comunicado;
  msgs: Message[] = [];


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private comunicadoService: ComunicadoService) { }

  ngOnInit() {

  }

  atualizarComunicado(id) {
    this.comunicadoService.atualizarComunicado(id);    
  }

}