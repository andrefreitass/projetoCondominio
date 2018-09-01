import { Component, OnInit, Input } from '@angular/core';
import { ListarComunicadoComponent } from '../../comunicado/listar-comunicado/listar-comunicado.component';

@Component({
  selector: 'detalhar-pauta',
  templateUrl: './detalhar-pauta.component.html',
  styleUrls: ['./detalhar-pauta.component.css']
})
export class DetalharPautaComponent implements OnInit {
  @Input() pauta;
  constructor() { }

  ngOnInit() {
  }
}
