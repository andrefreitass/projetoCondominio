import { EnqueteService } from './../enquete.service';
import { Component, OnInit } from '@angular/core';
import { Message, MessageService, ConfirmationService } from '../../../../node_modules/primeng/api';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { EnqueteModels } from '../../models/enquete-models';

@Component({
  selector: 'listar-enquete',
  templateUrl: './listar-enquete.component.html',
  styleUrls: ['./listar-enquete.component.css']
})
export class ListarEnqueteComponent implements OnInit {
  enquete = {dataInicio: new Date(), dataFim: new Date()};
  idEnquete: any;
  formularioEnquete: boolean = false;
  alterarEnquete: boolean = false;
  detalharEnquete: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private messageService: MessageService, private confirmationService: ConfirmationService,
    private enqueteService: EnqueteService) { }


  ngOnInit() {
    this.buscarListaEnquete();    
  }

  
  recebeIdEnquete(idEnquete) {
    this.idEnquete = idEnquete;
  } 

  converteData = (r: any) => ({...r, data: new Date(r.data) });

  selecionarEnquete(enquete) {
    this.enquete = enquete;
  }
  
  modalEnquete(modal: string) {
    if (modal == "formulario"){
      this.formularioEnquete = true;
    } else if (modal == "alterar") {
      this.alterarEnquete = true;
    } else if (modal == "detalhar"){
      this.detalharEnquete = true;
    }
      
  }
  aoAlterarEnquete(sucesso: boolean){
    this.alterarEnquete = false;
    this.mensagem('success', 'Sucesso:', 'Alteracao de enquete realizado com sucesso.');
    this.buscarListaEnquete();
  }

  aoSalvarFormularioEnquete(sucesso: boolean) {
    this.formularioEnquete = false;
    this.mensagem('success', 'Sucesso:', 'Cadastro de enquete realizado com sucesso.');
    this.buscarListaEnquete();
  }

  buscarListaEnquete() {    
    this.enqueteService.getEnquete(this.enquete.dataInicio.toString(), this.enquete.dataFim.toString())
    .subscribe((res:any) => {      
      this.enqueteService.listaEnquete = res.map(this.converteData) as EnqueteModels[];
    });    
  }

   
  confirmaExclusaoEnquete() {
    this.confirmationService.confirm({
      message: 'Deseja excluir a Enquete?',
      accept: () => {        
        this.excluirEnquete(this.idEnquete);
      }
    });
  }

  excluirEnquete(_id: string) {
      this.enqueteService.excluirEnquete(_id)
      .subscribe(res => {
        this.mensagem('success', 'Sucesso:', 'Enquete excluida com sucesso.');        
        this.buscarListaEnquete(); 
      },(error) => {
        this.mensagem('error', 'Erro:', 'Nao foi possivel realizar a exclusao da enquete');        
      }
    );
  }   

  mensagem(tipoSeverity: string, titulo: string, txtMensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipoSeverity, summary: titulo, detail: txtMensagem });
  }

}
