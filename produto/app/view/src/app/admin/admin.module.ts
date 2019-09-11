import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routing';
// import { LoginComponent } from '../rotas/login/login.component';
// import { ListarComponent } from '../rotas/listar/listar.component';
import { OpcoesHoleriteComponent } from '../rotas/opcoes-holerite/opcoes-holerite.component';
import { ListarLixeirasComponent } from '../rotas/listar-lixeiras/listar-lixeiras.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    // LoginComponent,
    // ListarComponent,
    OpcoesHoleriteComponent,
    ListarLixeirasComponent
    // BarraLateralComponent
  
  ]
})

export class AdminModule {}
