import { Component, OnInit, Input } from '@angular/core';

import { LazerService } from '../lazer.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'detalhar-lazer',
  templateUrl: './detalhar-lazer.component.html',
  styleUrls: ['./detalhar-lazer.component.css']
})
export class DetalharLazerComponent implements OnInit {
  @Input() lazer;
  
  constructor() { }

  ngOnInit() {
  }

 

}
