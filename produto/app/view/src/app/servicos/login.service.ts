import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {APP_URL,APP_URL1} from '../app.config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient,private router:Router,) { }
  verifica:any

  public Cadastrar_login(data){
    return this.http.post(APP_URL1+'?vc_nome='+data.vc_nome+'&vc_email='+data.vc_email+'&vc_senha='+data.vc_senha,data).toPromise()
  }

  public login(data){   
    return this.http.get(APP_URL+'?vc_email='+data.vc_email+'&vc_senha='+data.vc_senha,data).toPromise() ;
   
  }

}
