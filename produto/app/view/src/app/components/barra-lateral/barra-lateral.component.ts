import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [

  // { path: '/listar', title: 'listar',  icon:'person', class: '' },
  // { path: '/login', title: 'login',  icon:'content_paste', class: '' },
  {path:'/opcoes',  title: 'opcoes',  icon:'person', class: ''},
  {path:'/listar-lixeiras',  title: 'Lista de Lixeiras',  icon:'receipt', class: ''}
 ];

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

}
