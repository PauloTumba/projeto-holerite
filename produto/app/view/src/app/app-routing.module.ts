import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './rotas/login/login.component';
// import { GerarHoleriteComponent } from './rotas/gerar-holerite/gerar-holerite.component';
// import { OpcoesHoleriteComponent } from './rotas/opcoes-holerite/opcoes-holerite.component';
// import { ListarComponent } from './rotas/listar/listar.component';
// import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminComponent,
    children: [{
      path: '',
      loadChildren: './admin/admin.module#AdminModule'
    }]
  },
  // {path: 'admin',component:AdminComponent },
  {path: 'login',component:LoginComponent }
  // {path:'gerar-holerite',component:GerarHoleriteComponent},
  // {path:'opcoes-holerite',component:OpcoesHoleriteComponent},
  // {path: 'listar', component:ListarComponent},
  // {path: 'barra', component:BarraLateralComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
