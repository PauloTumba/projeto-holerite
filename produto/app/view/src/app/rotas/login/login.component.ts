import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../servicos/login.service';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mensagem } from '../../Uteis/mensagem';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
  
  // ...
} from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '72px',
        opacity: 1,
        // backgroundColor: '#ffffs',
        width: '100%'
       
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.5,
        // backgroundColor: '#ffff'
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('0.5s'),
        
      ]),
    ]),
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  configuracao={
    isLogin:true,
    actionText:'Entrar',
    buttonActionText:'Não tenho conta'
  }
  loginForm:FormGroup
  mudar: boolean;
  mudarEstado:any = "password";
  mudarFa:any = "fa-eye";
  private nameControl = new FormControl('');
  isOpen: boolean;
  mostrar:any='invisible';
  submitted:boolean;
  constructor(private loginService: LoginService, 
    private router:Router,
    private route: ActivatedRoute, private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.cerateForm();
  }
  
  green(){
    // this.isOpen = false;
    this.isOpen = !this.isOpen;  
    // setInterval(function(){
    //    this.tirar_input_after_transition(); 
    //   }, 1000);
    setTimeout(() => {
      this.tirar_input_after_transition();
    }, 500);
    

  
  }
  cerateForm(){
    this.loginForm=this.formbuilder.group({
      vc_email:[''],
      vc_senha:[''],
    });
  }
  onSubmit(){
  this.submitted = true;
  console.log(this.loginForm.value);
  if (this.loginForm.valid) {
  (this.configuracao.isLogin)
      ? this.loginService.login(this.loginForm.value).then((res: any) => {
        console.log(res,'ola');
        if(res==null){
          Mensagem.erro("Erro ao Logar");
          // this.router.navigate(['/gerar-holerite']);
        }else{
          console.log(res,'existe');
          Mensagem.sucesso("Email  "+ this.loginForm.value.vc_email+", foi autenticado com sucesso");
          this.router.navigate(['/opcoes-holerite']);
        }

      })
      : this.loginService.Cadastrar_login(this.loginForm.value)
      .then((res: any) => { 
        Mensagem.sucesso("Usuário "+ this.loginForm.value.vc_nome+", foi cadastrado com sucesso")
        
      });
  }}


  back() {
    this.router.navigate(['/gerar-holerite']);
    // console.log('ola');
  }

  changeAction(){
    this.configuracao.isLogin = !this.configuracao.isLogin;
    this.configuracao.actionText = !this.configuracao.isLogin? 'Cadastrar':'Entrar';
    this.configuracao.buttonActionText = !this.configuracao.isLogin ? 'Já tenho conta':'Não tenho conta';
    !this.configuracao.isLogin ? this.loginForm.addControl('vc_nome',this.nameControl) : this.loginForm.removeControl('vc_nome');
  }

  // get nome(): FormControl{return <FormControl>this.loginForm.get('nome');}
  // get email(): FormControl{return <FormControl>this.loginForm.get('email');}
  // get senha(): FormControl{return <FormControl>this.loginForm.get('senha');}

 
  private toggle : boolean = false;
  private tog : boolean = false;

  // //define your method
  mudarFaE(){   
     //if you just want to toggle the class; change toggle variable.
     this.toggle= !this.toggle; 
     if(this.toggle==true){
      this.mudarFa='fa-eye-slash';
      this.mudarEstado='text';
     }else{
      this.mudarEstado='password';
      this.mudarFa='fa-eye';
     }     
  }
  tirar_input_after_transition(){
    console.log(this.isOpen);
        if(this.isOpen==true){
          this.mostrar='visible';           
  
        }else{
          this.mostrar='invisible';
         
         
        }    
      }

 
}
