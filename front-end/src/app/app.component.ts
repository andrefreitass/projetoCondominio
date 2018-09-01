import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  items: MenuItem[];

  ngOnInit() {
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
