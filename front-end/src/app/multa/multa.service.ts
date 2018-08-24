import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MultaModels } from '../models/multa-models';

@Injectable({
  providedIn: 'root'
})

export class MultaService {  
  
  listaMulta: MultaModels [];
  readonly URL_API = `${environment.url_base}/multa`;

  constructor(private http: HttpClient) {        
   }

   getMulta(dataInicio: string, dataFim: string) {
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim) 
    } ;
    return this.http.get(this.URL_API, options);
  }

  inserirMulta(multa: MultaModels) {
    return this.http.post(this.URL_API, multa);
  }

  atualizarMulta(multa: MultaModels) {
    return this.http.put(this.URL_API + `/${multa._id}`, multa);
  }

  excluirMulta(_id: string) {    
      return this.http.delete(this.URL_API +`/${_id}`);
  }
  
}
