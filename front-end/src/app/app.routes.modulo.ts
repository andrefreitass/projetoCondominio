import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Imports dos Components
import { ListarComunicadoComponent } from "./comunicado/listar-comunicado/listar-comunicado.component";
import { ListarEnqueteComponent } from "./enquete/listar-enquete/listar-enquete.component";
import { ListarPautaComponent } from "./pauta/listar-pauta/listar-pauta.component";
import { ListarLazerComponent } from "./lazer/listar-lazer/listar-lazer.component";
import { ListarAdvertenciaComponent } from './advertencia/listar-advertencia/listar-advertencia.component';
import { ListarMultaComponent } from './multa/listar-multa/listar-multa.component';
import { ListarFuncionarioComponent } from "./funcionario/listar-funcionario/listar-funcionario.component";
import { LoginComponent } from "./admin/login/login.component";
import { FormularioLoginComponent } from "./admin/formulario-login/formulario-login.component";



const appRoutes: Routes = [  
  
   { path: 'listar-lazer', component: ListarLazerComponent },
   { path: 'listar-advertencia', component: ListarAdvertenciaComponent },
   { path: 'listar-multa', component: ListarMultaComponent },
   { path: 'listar-comunicado', component: ListarComunicadoComponent },
   { path: 'listar-enquete', component: ListarEnqueteComponent },
   { path: 'listar-pauta', component: ListarPautaComponent },  
   { path: 'listar-funcionario', component: ListarFuncionarioComponent }, 
   { path: 'login', component: LoginComponent },
   { path: 'formulario-login', component: FormularioLoginComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}