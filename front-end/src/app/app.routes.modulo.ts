import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Imports dos Components
import { ListarComunicadoComponent } from "./comunicado/listar-comunicado/listar-comunicado.component";

const appRoutes: Routes = [  
   { path: 'listar-comunicado', component: ListarComunicadoComponent },

    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}