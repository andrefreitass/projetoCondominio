import { environment } from './../../environments/environment';
import { PautaModels } from './../models/pauta-models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PautaService {

listaPauta: PautaModels [];
readonly URL_API = `${environment.url_base}/pauta`;

  constructor(private http: HttpClient) { }
  getPautaDataInicio(dataInicio: string) {     
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)      
    } ;         
    return this.http.get(this.URL_API+'/por-inicio/dataInicio'+ dataInicio, options);    
  }

  getPautaDataFim(dataFim: string){
    const options = 
    {
      params: new HttpParams()
        .set('dataFim', dataFim)
    };    
    return this.http.get(this.URL_API+'/por-fim/dataFim' + dataFim, options)
  }

  getPauta(dataInicio: string, dataFim: string){
    const options = {
      params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim)
    };
    return this.http.get(this.URL_API, options);
  }

  inserirPauta(pauta: PautaModels){
    return this.http.post(this.URL_API, pauta);
  }

  atualizarPauta(pauta: PautaModels){
    return this.http.put(this.URL_API + `/${pauta._id}`, pauta);
  }

  excluirPauta(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
  
}
