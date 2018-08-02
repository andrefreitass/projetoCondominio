import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importes da funcionalidade lazer
import { ListarLazerComponent } from './listar-lazer/listar-lazer.component'
import { FormularioLazerComponent } from './formulario-lazer/formulario-lazer.component'; 
import { AlterarLazerComponent } from './alterar-lazer/alterar-lazer.component';
import { DetalharLazerComponent } from './detalhar-lazer/detalhar-lazer.component';
import { LazerService } from './lazer.service';

//Imports PRIMENG
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';     
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { PanelMenuModule } from 'primeng/panelmenu';                
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { InputMaskModule} from 'primeng/inputmask';
import { CarouselModule } from 'primeng/carousel';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule, 
    //Imports PRIMENG
   FieldsetModule,
   DialogModule,
   PaginatorModule,
   ConfirmDialogModule,
   TableModule,
   AccordionModule,
   BrowserAnimationsModule,
   PanelMenuModule,
   CardModule,
   CalendarModule,
   ButtonModule,
   InputTextModule,
   InputTextareaModule,
   MessagesModule,
   MessageModule,
   InputMaskModule,
   CarouselModule,
   MultiSelectModule
  ],
  declarations: [
    FormularioLazerComponent,
    ListarLazerComponent,
    AlterarLazerComponent,
    DetalharLazerComponent
  ],
  exports:[
    FormularioLazerComponent,
    ListarLazerComponent,
    AlterarLazerComponent,
    DetalharLazerComponent
  ],
  providers:[
    LazerService
  ]
})
export class LazerModule { }
