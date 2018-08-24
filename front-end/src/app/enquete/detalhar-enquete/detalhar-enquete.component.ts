import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalhar-enquete',
  templateUrl: './detalhar-enquete.component.html',
  styleUrls: ['./detalhar-enquete.component.css']
})
export class DetalharEnqueteComponent implements OnInit {
  @Input() enquete;
  constructor() { }

  ngOnInit() {
  }

}
