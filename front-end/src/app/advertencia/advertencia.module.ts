import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports da Funcionalidade de Advertencia
import { AdvertenciaService } from './advertencia.service';
import { AlterarAdvertenciaComponent } from './alterar-advertencia/alterar-advertencia.component';
import { DetalharAdvertenciaComponent } from './detalhar-advertencia/detalhar-advertencia.component';
import { FormularioAdvertenciaComponent } from './formulario-advertencia/formulario-advertencia.component';
import { ListarAdvertenciaComponent } from './listar-advertencia/listar-advertencia.component';

//Imports PRIMENG
import { AccordionModule } from 'primeng/accordion';     
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputMaskModule} from 'primeng/inputmask';
import { GrowlModule } from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    //Imports PRIMENG
    AccordionModule,
    BrowserAnimationsModule,    
    CalendarModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    PaginatorModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,    
    ConfirmDialogModule,
    GrowlModule,
    ToastModule    
  ],
  declarations: [
    AlterarAdvertenciaComponent,
    DetalharAdvertenciaComponent, 
    FormularioAdvertenciaComponent, 
    ListarAdvertenciaComponent
  ],
  exports: [
    AlterarAdvertenciaComponent,
    DetalharAdvertenciaComponent, 
    FormularioAdvertenciaComponent, 
    ListarAdvertenciaComponent
  ],
  providers: [
    AdvertenciaService,
    //Imports do PrimeNg
    MessageService,
    ConfirmationService
  ]
})
export class AdvertenciaModule { }
