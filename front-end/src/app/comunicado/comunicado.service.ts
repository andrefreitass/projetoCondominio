import { environment } from '../../environments/environment';

import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { ComunicadoModels } from '../models/comunicado-models';

@Injectable({
  providedIn: 'root'
})

export class ComunicadoService {
  
  comunicado: ComunicadoModels;
  listaComunicado: ComunicadoModels [];
  readonly URL_API = `${environment.url_base}/comunicado`;

  constructor(private http: HttpClient) {    
    this.comunicado = new ComunicadoModels();
   }

  inserirComunicado(comunicado: ComunicadoModels) {
    return this.http.post(this.URL_API, comunicado);
  }

  getComunicado() {
    return this.http.get(this.URL_API);
  }

  atualizarComunicado(comunicado: ComunicadoModels) {
    return this.http.put(this.URL_API + `/${comunicado._id}`, comunicado);
  }

  excluirComunicado(_id: string) {
    console.log(this.URL_API +`/${_id}`)
      return this.http.delete(this.URL_API +`/${_id}`);/**.pipe(
        catchError((e: HttpErrorResponse) => throwError(`Error: ${e}`))
      ); */

  }
  
}
