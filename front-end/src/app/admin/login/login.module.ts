import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//==Imports Funcionalidades
import { LoginComponent } from './login.component';

//==Imports PRIMENG
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //Imports PrimeNG
    ButtonModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
