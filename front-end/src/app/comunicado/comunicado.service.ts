import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComunicadoModels } from '../models/comunicado-models';

@Injectable({
  providedIn: 'root'
})

export class ComunicadoService {
  
  comunicado: ComunicadoModels;
  listaComunicado: ComunicadoModels [];

  readonly URL_API = 'http://localhost:3000/api/comunicado';

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
      return this.http.delete(this.URL_API +`/${_id}`);    
  }
  
}
