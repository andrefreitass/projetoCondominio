import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports da Funcionalidade de Pauta
import { PautaService } from './pauta.service';
import { AlterarPautaComponent } from './alterar-pauta/alterar-pauta.component';
import { DetalharPautaComponent } from './detalhar-pauta/detalhar-pauta.component';
import { FormularioPautaComponent } from './formulario-pauta/formulario-pauta.component';
import { ListarPautaComponent } from './listar-pauta/listar-pauta.component';


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
import { GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
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
    BreadcrumbModule,
    ConfirmDialogModule,
    GrowlModule,
    ToastModule
  ],
  declarations: [
    AlterarPautaComponent,
    DetalharPautaComponent,
    FormularioPautaComponent,
    ListarPautaComponent   
  ],
  exports: [
    AlterarPautaComponent,
    DetalharPautaComponent,
    FormularioPautaComponent,
    ListarPautaComponent   
  ],
  providers: [
    PautaService,
    //Imports do PrimeNg
    MessageService,
    ConfirmationService
  ]
})
export class PautaModule { }
