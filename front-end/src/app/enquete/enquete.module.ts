import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports da Funcionalidade de Enquete
import { EnqueteService } from './enquete.service';
import { AlterarEnqueteComponent } from './alterar-enquete/alterar-enquete.component';
import { DetalharEnqueteComponent } from './detalhar-enquete/detalhar-enquete.component';
import { FormularioEnqueteComponent } from './formulario-enquete/formulario-enquete.component';
import { ListarEnqueteComponent } from './listar-enquete/listar-enquete.component';


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
    ConfirmDialogModule    
  ],
  declarations: [
    AlterarEnqueteComponent,
    DetalharEnqueteComponent,
    FormularioEnqueteComponent,
    ListarEnqueteComponent   
  ],
  exports: [
    AlterarEnqueteComponent,
    DetalharEnqueteComponent,
    FormularioEnqueteComponent,
    ListarEnqueteComponent   
  ],
  providers: [
    EnqueteService,
    //Imports do PrimeNg
    MessageService,
    ConfirmationService
  ]
})
export class EnqueteModule { }
