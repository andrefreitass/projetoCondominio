import { Component, ViewEncapsulation } from '@angular/core';

//==Imports Funcionalidades ===
import { AuthService } from './admin/login/auth.service';

//== Impots PrimeNG ===
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  
  items: MenuItem[];

  mostrarMenu: boolean = false;
  constructor(private authService: AuthService){
  }

  ngOnInit() {

    this.authService.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
    );
    
      this.items = [
          {
              label: 'Administração',
              icon: 'fa fa-fw fa-file-o',
              items: [

                {label: 'Advertencia' ,  routerLink:['listar-advertencia']},
                {label: 'Ata', routerLink:['listar-ata']},
                {label: 'Comunicado', routerLink:['listar-comunicado']},
                {label: 'Enquete', routerLink:['listar-enquete']},
                {label: 'Funcionario',  routerLink:['listar-funcionario']},
                {label: 'Lazer' , routerLink:['listar-lazer']},
                {label: 'Pauta', routerLink:['listar-pauta']},
                {label: 'Multa' ,  routerLink:['listar-multa']},
              ]
          },
          {
              label: 'Serviços',
              icon: 'fa fa-fw fa-edit',
              items: [
                  {label: 'Envia Comunicado', icon: 'fa fa-fw fa-mail-forward'},
                  {label: 'Envia Multa', icon: 'fa fa-fw fa-mail-reply'}
              ]
          },
          {
            label: 'Relatórios',
            icon: 'fa fa-fw fa-edit',
            items: [
                {label: 'Relatório A', icon: 'fa fa-fw fa-mail-forward'},
                {label: 'Relatório B', icon: 'fa fa-fw fa-mail-reply'}
            ]
        },
          

      ];
  }
}
