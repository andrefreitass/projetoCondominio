import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { LoginModels } from '../models/login-models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL_API = `${environment.url_base}/login`;

  constructor( private http: HttpClient ) { }

  inserirLogin( login: LoginModels ) {
    return this.http.post( this.URL_API, login );
  }

}
