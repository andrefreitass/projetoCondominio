import { ComunicadoModels } from './../models/comunicado-models';
import { EnqueteModels } from './../models/enquete-models';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  listaEnquete: EnqueteModels [];
  readonly URL_API = `${environment.url_base}/enquete`;

  constructor(private http: HttpClient) { }

  getEnqueteDataInicio(dataInicio: string) {     
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)      
    } ;         
    return this.http.get(this.URL_API+'/por-inicio/dataInicio'+ dataInicio, options);    
  }

  getEnqueteDataFim(dataFim: string){
    const options = 
    {
      params: new HttpParams()
        .set('dataFim', dataFim)
    };    
    return this.http.get(this.URL_API+'/por-fim/dataFim' + dataFim, options)
  }


  getEnquete(dataInicio: string, dataFim: string){
    const options = 
    { params: new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim)
    };
    return this.http.get(this.URL_API, options);
  }

  inserirEnquete(enquete: EnqueteModels){
    return this.http.post(this.URL_API, enquete);
  }

  atualizarEnquete(enquete: ComunicadoModels){
    return this.http.put(this.URL_API + `/${enquete._id}`, enquete)
  }

  excluirEnquete(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
