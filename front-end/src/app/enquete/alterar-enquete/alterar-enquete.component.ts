import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../node_modules/primeng/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { EnqueteService } from '../enquete.service';


@Component({
  selector: 'alterar-enquete',
  templateUrl: './alterar-enquete.component.html',
  styleUrls: ['./alterar-enquete.component.css']
})
export class AlterarEnqueteComponent implements OnInit {

  @Input() enquete = {} as any;
  @Output() aoAlterar: EventEmitter<boolean> = new EventEmitter<boolean>();
  msgs: Message[] = [];
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private enqueteService: EnqueteService) {
            
     }

  ngOnInit() {    
  }

atualizarEnquete(enquete) {   
    if(enquete) {          
      this.enqueteService.atualizarEnquete(enquete)      
        .subscribe(res => {          
          this.aoAlterar.emit(true);             
        }, error => this.aoAlterar.emit(false));
    }     
  }

}
