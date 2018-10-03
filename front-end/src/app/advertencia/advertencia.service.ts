import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AdvertenciaModels } from '../models/advertencia-models';

@Injectable({
  providedIn: 'root'
})
export class AdvertenciaService {

  listaAdvertencia: AdvertenciaModels [];
  readonly URL_API = `${environment.url_base}/advertencia`;

  constructor(private http: HttpClient) {        
   }

   getAdvertenciaDataInicio(dataInicio: string) {     
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)      
    } ;         
    return this.http.get(this.URL_API+'/por-inicio/dataInicio'+ dataInicio, options);    
  }

  getAdvertenciaDataFim(dataFim: string){
    const options = 
    {
      params: new HttpParams()
        .set('dataFim', dataFim)
    };    
    return this.http.get(this.URL_API+'/por-fim/dataFim' + dataFim, options)
  }

   getAdvertencia(dataInicio: string, dataFim: string) {
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim) 
    } ;
    return this.http.get(this.URL_API, options);
  }

  inserirAdvertencia(advertencia: AdvertenciaModels) {
    return this.http.post(this.URL_API, advertencia);
  }

  atualizarAdvertencia(advertencia: AdvertenciaModels) {
    return this.http.put(this.URL_API + `/${advertencia._id}`, advertencia);
  }

  excluirAdvertencia(_id: string) {    
      return this.http.delete(this.URL_API +`/${_id}`);
  }
  
}
