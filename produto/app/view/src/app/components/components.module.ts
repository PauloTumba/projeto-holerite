import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
   
    NavbarComponent,
    BarraLateralComponent,
  ],
  exports: [
   
    NavbarComponent,
    BarraLateralComponent,
  ]
})
export class ComponentsModule { }
