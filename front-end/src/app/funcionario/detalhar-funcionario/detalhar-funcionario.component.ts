import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalhar-funcionario',
  templateUrl: './detalhar-funcionario.component.html',
  styleUrls: ['./detalhar-funcionario.component.css']
})
export class DetalharFuncionarioComponent implements OnInit {
  @Input() funcionario;
  constructor() { }

  ngOnInit() {
  }

}
