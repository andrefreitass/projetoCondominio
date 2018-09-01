import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { FuncionarioModels } from '../models/funcionario-models';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {  
  
  listaFuncionario: FuncionarioModels [];
  readonly URL_API = `${environment.url_base}/funcionario`;

  constructor(private http: HttpClient) {        
   }

   getFuncionario(pesquisaCpf: string) {
    const options = 
    { params: new HttpParams()
      .set('pesquisaCpf', pesquisaCpf)
    
    } ;
    return this.http.get(this.URL_API, options);
  }

  inserirFuncionario(funcionario: FuncionarioModels) {
    return this.http.post(this.URL_API, funcionario);
  }

  atualizarFuncionario(funcionario: FuncionarioModels) {
    return this.http.put(this.URL_API + `/${funcionario._id}`, funcionario);
  }

  excluirFuncionario(_id: string) {    
      return this.http.delete(this.URL_API +`/${_id}`);
  }
  
}
