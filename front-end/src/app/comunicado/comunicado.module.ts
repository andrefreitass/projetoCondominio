import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports da Funcionalidade de Comunicado
import { ComunicadoService } from './comunicado.service';
import { AlterarComunicadoComponent } from './alterar-comunicado/alterar-comunicado.component';
import { DetalharComunicadoComponent } from './detalhar-comunicado/detalhar-comunicado.component';
import { FormularioComunicadoComponent } from './formulario-comunicado/formulario-comunicado.component';
import { ListarComunicadoComponent } from './listar-comunicado/listar-comunicado.component';


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
import { GrowlModule } from 'primeng/growl';
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
    AlterarComunicadoComponent,
    DetalharComunicadoComponent, 
    FormularioComunicadoComponent, 
    ListarComunicadoComponent
  ],
  exports: [
    AlterarComunicadoComponent,
    DetalharComunicadoComponent, 
    FormularioComunicadoComponent, 
    ListarComunicadoComponent
  ],
  providers: [
    ComunicadoService,
    //Imports do PrimeNg
    MessageService,
    ConfirmationService
    
  ]
})
export class ComunicadoModule { }
