import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-gerar-holerite',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'white'
       
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.5,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s'),
        
      ]),
    ]),
  ],
  templateUrl: './gerar-holerite.component.html',
  styleUrls: ['./gerar-holerite.component.css'],
  
})
export class GerarHoleriteComponent{
  isOpen: boolean;
 
  green(){
    // this.isOpen = false;
    this.isOpen = !this.isOpen;
  
  }
  yellow(){
    // this.isOpen = true;
    this.isOpen = !this.isOpen;
  }

  mostrar:any='invisible';

  // private toggle : boolean = false;
 
  // //define your method
  // clickEvent(event){
   
  //    //if you just want to toggle the class; change toggle variable.
  //    this.toggle= !this.toggle; 
  // }

  // (click)="clickEvent($event)"  [ngClass]="{'is-active': toggle}"
  adicionar(){
  console.log(this.isOpen);
      if(this.isOpen==true){
        this.mostrar='visible';
        return{
          'is-active':true
        }       

      }else{
        this.mostrar='invisible';
        return{
          'is-active':false
        }
       
      }    
    }


 

}
