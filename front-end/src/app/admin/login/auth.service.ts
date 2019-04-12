import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { FuncionarioModels } from '../../models/funcionario-models';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  readonly URL_API = `${environment.url_base}/login`;

  constructor(private router: Router, private http: HttpClient) { }

  fazerLogin(funcionario: FuncionarioModels){

    if(funcionario.nome != null) {
      this.http.post(this.URL_API, funcionario).subscribe(
        res => {
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/']);
        }, error => {
          console.log('Falha ao validar usuário.');
        }
      );
      return true;
    } else {
      this.mostrarMenuEmitter.emit(false);
      return false;
    }
  }

}
