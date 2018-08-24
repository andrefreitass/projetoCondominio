import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalhar-advertencia',
  templateUrl: './detalhar-advertencia.component.html',
  styleUrls: ['./detalhar-advertencia.component.css']
})
export class DetalharAdvertenciaComponent implements OnInit {
  @Input() advertencia;
  constructor() { }

  ngOnInit() {
  }

}
