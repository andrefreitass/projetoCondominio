import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutesModulo } from './app.routes.modulo';

import { ComunicadoModule } from './comunicado/comunicado.module';

//Imports PrimeNG
import {AccordionModule} from 'primeng/accordion';     
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu'; 
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModulo,
    HttpClientModule,
    FormsModule,
    ComunicadoModule,
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
