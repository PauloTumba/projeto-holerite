import { Component, OnInit,Input } from '@angular/core';
import {LoginService} from '../../servicos/login.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mensagem } from '../../Uteis/mensagem';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-listar-lixeiras',
  templateUrl: './listar-lixeiras.component.html',
  styleUrls: ['./listar-lixeiras.component.css'],
  // providers:[LoginService]
})
export class ListarLixeirasComponent implements OnInit {
  lista:any;
  listas:any;
  listaz:any;
  item:any;  
  user:string;
  room:string;
  kkk:any;
  id:any;
  messageArray:Array<{user:string,message:string}>=[];

  constructor(
    private service: LoginService, 
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    // this.join();

    // var dados=this.service.entrou().
    // subscribe(data=>this.messageArray.push(data));
    // console.log('o q é isso', dados);
    const socket = socketIo('http://localhost:8080');

    socket.on(0,(data) =>
      console.log('olass', (data)),     
      );
      // this.listar();

      this.listar();
        this.id = setInterval(() => {
          this.listar();
        }, 5000);
    
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

   
  
  listar(){
    
    this.service.ler().then(res => {     
        this.listas=res;     
      console.log("listas", this.listas);         
     
    })
  }

}
