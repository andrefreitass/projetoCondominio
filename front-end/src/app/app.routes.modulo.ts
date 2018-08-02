import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Imports dos Components
import { ListarComunicadoComponent } from "./comunicado/listar-comunicado/listar-comunicado.component";

import { ListarLazerComponent } from "./lazer/listar-lazer/listar-lazer.component";
import { FormularioLazerComponent } from "./lazer/formulario-lazer/formulario-lazer.component";
import { AlterarLazerComponent } from "./lazer/alterar-lazer/alterar-lazer.component";
import { DetalharLazerComponent } from "./lazer/detalhar-lazer/detalhar-lazer.component";

const appRoutes: Routes = [  
   { path: 'listar-comunicado', component: ListarComunicadoComponent },
  
   { path: 'listar-lazer', component: ListarLazerComponent },
   { path: 'formulario-lazer', component: FormularioLazerComponent },
   { path: 'alterar-lazer', component: AlterarLazerComponent },
   { path: 'detalhar-lazer', component: DetalharLazerComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}