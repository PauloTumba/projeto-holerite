import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './rotas/login/login.component';
import { GerarHoleriteComponent } from './rotas/gerar-holerite/gerar-holerite.component';
import { OpcoesHoleriteComponent } from './rotas/opcoes-holerite/opcoes-holerite.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent },
  {path:'gerar-holerite',component:GerarHoleriteComponent},
  {path:'opcoes-holerite',component:OpcoesHoleriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
