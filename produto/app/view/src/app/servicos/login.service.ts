import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_URL,APP_URL1} from '../app.config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, observable } from  'rxjs';
// import * as io from 'socket.io-client';
import { strictEqual } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  // private socket = io('localhost:8080');

  // joinRoom(data){
  //   this.socket.emit('nova', data);
  // }
  
  // joinRoom(){
  //   this.socket.emit('nova');
  // }

  // entrou(){
  //   let observable =  new Observable<{data1:string, data2:string}>(observer=>{
  //     this.socket.on('nova', (data)=>{
  //       observer.next(data);
  //     });
  //     return() =>{this.socket.disconnect();}
  //   });
  //   return observable;
  // }

  // entrou(){
  //   let observable =  new Observable<{user:string, message:string}>(observer=>{
  //     this.socket.on('usuario novo', (data)=>{
  //       observer.next(data);
  //     });
  //     return() =>{this.socket.disconnect();}
  //   });
  //   return observable;
  // }

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
