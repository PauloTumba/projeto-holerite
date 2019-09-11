import { Component, OnInit,Input } from '@angular/core';
import {LoginService} from '../../servicos/login.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mensagem } from '../../Uteis/mensagem';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  lista:any;
  listas:any;
  listaz:any;
  item:any;
  check=false;
  recebe:any=0;
  mensagem:any;
  
  // mudar:boolean;
  mudar : boolean ;
  form: FormGroup;
  @Input() dados: any;
  constructor(private service: LoginService, 
    private router:Router,
    private route: ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit() {
    // this.selecionar(this.item);
    
    // this. estado();
    this.listar();
    // this.form = this.fb.group({          
    //   ch_inativo: this.mudar
    // })
    this.cerateForm();

   
   
  }

  cerateForm(){

   
    this.form = this.fb.group({
      vc_nome:[''],
      ch_inativo:  [this.recebe],      
      vc_empresa:[''],
      dt_renovacao:['',{ value: new Date().toISOString().split('T')[0], disabled: true }],
      vc_obs:[''],
     
    })

  }

  mudars(){
    this.check=!this.check;
    if(this.check==false){
      this.recebe=0;
    }else{
      this.recebe=1;
    }
    console.log(this.check);
  }


  listar(){
    
    this.service.ler().then(res => {
      this.listas=res;
      this.listaz=res[0]['vc_nome'];
      console.log("listas", this.listas);
      // let forms = {};
      this.listas.forEach((usuario, key) => {
        // forms[key] = [true]
        console.log(usuario.ch_inativo);
        if(usuario.ch_inativo==false){
          this.mudar=false;
 
        }else if(usuario.ch_inativo==true){
         this.mudar= true;
 
       }
       
      })
      console.log("listaz", res[0]['ch_inativo']);
      
     
      
     
     
     
    

    })
  }

  salvar() {
    // var dados = this.form.value;

    
    this.mensagem=this.form.value ;
    // console.log('pontos para mim',JSON.stringify(this.form.value));

    // const userStr = JSON.parse(this.form.value);
    console.log(this.mensagem);
    
    // this.service.inserir(this.form.value).then((res: any) => {
      // this.service.inserir(JSON.stringify(this.form.value)).then((res: any) => {
      // console.log(res);
      // if (res.status == "sucesso") {
      //   Mensagem.sucesso(res.msg, "Sucesso");        
      // }
      // else
      //   Mensagem.erro(res.msg, "Erro");
    // })

    this.service.inserir(this.mensagem).subscribe((dados: any)=>{
      console.log("Policy created, ", dados);
    });
  }


  // salvar() {
  //   var dados = this.form.value;

  //   if (this.form.controls['sr_id'].value == "NOVO") {
  //     dados.sr_id = "";
  //   } else {
  //     dados.sr_id = this.form.controls['sr_id'].value;
  //   }
  //   console.log(dados)

  //   this.service.inserir(dados).then((res: any) => {
  //     if (res.status == "sucesso") {
  //       Mensagem.sucesso(res.msg, "Sucesso");        
  //     }
  //     else
  //       Mensagem.erro(res.msg, "Erro");
  //   })
  // }
  
  selecionar(itemDaLista){    
    this.service.lere(itemDaLista).then((res) =>{
       console.log(itemDaLista.vc_nome)
    })    
    // this.listas.splice(idx, 1);//faz o update da lista quando um usuario é apagado    
  }

  // estado(){
  //   // this.item=this.listar();
  //     console.log('sss',  this.item);
  //     this.mudar=!this.mudar;

  //     console.log(this.mudar)
  // }

}

