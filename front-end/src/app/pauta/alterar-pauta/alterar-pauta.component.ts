import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { PautaService } from '../pauta.service';

@Component({
  selector: 'alterar-pauta',
  templateUrl: './alterar-pauta.component.html',
  styleUrls: ['./alterar-pauta.component.css']
})
export class AlterarPautaComponent implements OnInit {
  
  @Input() pauta = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private pautaService: PautaService) { }

  ngOnInit() {
  }

  atualizarPauta(pauta){
    if(pauta){
      this.pautaService.atualizarPauta(pauta)
        .subscribe(res => {
          this.aoAlterar.emit(true);
        }, error => this.aoAlterar.emit(false));
    }
  }
}