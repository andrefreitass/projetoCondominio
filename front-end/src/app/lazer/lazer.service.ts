import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LazerModel } from './../models/lazer-model';
import { ListarLazerComponent } from '../lazer/listar-lazer/listar-lazer.component'

@Injectable({
  providedIn: 'root'
})
export class LazerService {

  selecionaLazer: LazerModel;
  listaLazer: LazerModel[];

  readonly URL_API = 'http://localhost:3000/api/lazer';

  constructor(private http: HttpClient) {
    this.selecionaLazer = new LazerModel();
  }

  //post
  InserirLazer(lazer: LazerModel) {
    return this.http.post(this.URL_API, lazer);
    //get 
  }
  getlazer() {
    return this.http.get(this.URL_API);
  }
  //put 
  atualizarLazer(lazer: LazerModel) {
    return this.http.put(this.URL_API + `/${lazer._id}`, lazer);
  }
  //delete
  excluirLazer(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
