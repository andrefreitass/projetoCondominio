import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalhar-multa',
  templateUrl: './detalhar-multa.component.html',
  styleUrls: ['./detalhar-multa.component.css']
})
export class DetalharMultaComponent implements OnInit {
  @Input() multa;
  constructor() { }

  ngOnInit() {
  }

}
