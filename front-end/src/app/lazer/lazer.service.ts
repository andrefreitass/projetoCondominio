import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LazerModels } from './../models/lazer-models';
import { ListarLazerComponent } from '../lazer/listar-lazer/listar-lazer.component'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LazerService {

  listaLazer: LazerModels [];
  readonly URL_API = `${environment.url_base}/lazer`;

  constructor(private http: HttpClient) {        
   }

   getLazerDataInicio(dataInicio: string) {     
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)      
    } ;         
    return this.http.get(this.URL_API+'/por-inicio/dataInicio'+ dataInicio, options);    
  }

  getLazerDataFim(dataFim: string){
    const options = 
    {
      params: new HttpParams()
        .set('dataFim', dataFim)
    };    
    return this.http.get(this.URL_API+'/por-fim/dataFim' + dataFim, options)
  }

   getLazer(dataInicio: string, dataFim: string) {
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim) 
    } ;
    return this.http.get(this.URL_API, options);
  }

  inserirLazer(lazer: LazerModels) {
    return this.http.post(this.URL_API, lazer);
  }

  atualizarLazer(lazer: LazerModels) {
    return this.http.put(this.URL_API + `/${lazer._id}`, lazer);
  }

  excluirLazer(_id: string) {    
      return this.http.delete(this.URL_API +`/${_id}`);
  }
  
}
