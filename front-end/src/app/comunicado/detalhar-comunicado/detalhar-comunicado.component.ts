import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalhar-comunicado',
  templateUrl: './detalhar-comunicado.component.html',
  styleUrls: ['./detalhar-comunicado.component.css']
})
export class DetalharComunicadoComponent implements OnInit {
  @Input() comunicado;
  constructor() { }

  ngOnInit() {
  }

}
