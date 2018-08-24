import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ComunicadoModels } from '../models/comunicado-models';

@Injectable({
  providedIn: 'root'
})

export class ComunicadoService {  
  
  listaComunicado: ComunicadoModels [];
  readonly URL_API = `${environment.url_base}/comunicado`;

  constructor(private http: HttpClient) {        
   }

   getComunicado(dataInicio: string, dataFim: string) {
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim) 
    } ;
    return this.http.get(this.URL_API, options);
  }

  inserirComunicado(comunicado: ComunicadoModels) {
    return this.http.post(this.URL_API, comunicado);
  }

  atualizarComunicado(comunicado: ComunicadoModels) {
    return this.http.put(this.URL_API + `/${comunicado._id}`, comunicado);
  }

  excluirComunicado(_id: string) {    
      return this.http.delete(this.URL_API +`/${_id}`);
  }
  
}
