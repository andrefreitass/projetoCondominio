import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutesModulo } from './app.routes.modulo';

import { ComunicadoModule } from './comunicado/comunicado.module';
import { LazerModule } from './lazer/lazer.module';
import { PautaModule } from './pauta/pauta.module';
import { EnqueteModule } from './enquete/enquete.module';
import { AdvertenciaModule } from './advertencia/advertencia.module';
import { MultaModule } from './multa/multa.module'
import { FuncionarioModule } from './funcionario/funcionario.module'

//Imports PrimeNG
import {AccordionModule} from 'primeng/accordion';     
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu'; 
import { CardModule } from 'primeng/card';
import { LoginModule } from './admin/login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutesModulo,
    HttpClientModule,
    FormsModule,
    ComunicadoModule,
    LazerModule,
    EnqueteModule,
    PautaModule,
    AdvertenciaModule,
    MultaModule,
    FuncionarioModule,
    LoginModule,
    //Imports PrimeNG
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
