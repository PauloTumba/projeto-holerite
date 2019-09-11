import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_URL,APP_URL1} from '../app.config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


     

  constructor( private http: HttpClient,private router:Router,) { }
  verifica:any

  public Cadastrar_login(data){
    return this.http.post(APP_URL+'/create.php?vc_nome='+data.vc_nome+'&vc_email='+data.vc_email+'&vc_senha='+data.vc_senha,data).toPromise()
  }

  public login(data){   
    return this.http.get(APP_URL+'/read_one.php/?vc_email='+data.vc_email+'&vc_senha='+data.vc_senha,data).toPromise() ;
   
  }

  // public ler(){   
  //   return this.http.get(APP_URL+'/read.php/').toPromise() ;
   
  // }

  // ler(){
  //   return new Promise((resolve, reject)=>{
  //       this.http.get<any>((APP_URL+'/read.php/').subscribe(res=>resolve(res.data)); 
  //   })
  // }

  // ler(){
  //   return new Promise((resolve, reject)=>{
  //       this.http.get<any>(APP_URL).subscribe(res=>resolve(res.data)); 
  //   })
  // }
  lere(itemDaLista){
    return new Promise((resolve, reject)=>{
        this.http.get<any>(APP_URL).subscribe(res=>resolve(res.data)); 
    })
  }
  public ler(){
    return this.http.get(APP_URL).toPromise()
}

  // inserir(dados){
  //   return new Promise((resolve, reject)=>{
  //       this.http.post<any>("http://localhost/projeto-holerite/produto/app/controller/projetos/inserir/index.php/", dados).subscribe(res=>resolve(res)); 
  //   })
  // }

  inserir(dados): Observable<any>{
    return this.http.post<any>(APP_URL, dados);
  }

  // public inserir(data){
  //   return this.http.post("http://localhost/projeto-holerite/produto/app/controller/projetos/inserir/index.php",data).toPromise()
  // }



}
