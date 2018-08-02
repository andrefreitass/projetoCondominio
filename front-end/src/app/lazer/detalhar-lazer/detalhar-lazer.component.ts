import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  
  constructor(private lazerService: LazerService, private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
  }

 

}
