import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  pt:any;

  constructor(private messageService: MessageService) { }

  converteData = (r: any) => ({ ...r, data: new Date(r.data) });

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {     
    this.messageService.add({severity: tipoSeverity, summary: titulo, detail:txtMensagem});    
  }

  
  convertCalendario() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      clear: 'Limpar'
    }
  }
  
}
