import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private messageService: MessageService) { }

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {     
    this.messageService.add({severity: tipoSeverity, summary: titulo, detail:txtMensagem});    
  }
}
