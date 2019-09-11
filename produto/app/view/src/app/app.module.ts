import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './rotas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerarHoleriteComponent } from './rotas/gerar-holerite/gerar-holerite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpcoesHoleriteComponent } from './rotas/opcoes-holerite/opcoes-holerite.component';
import { ListarComponent } from './rotas/listar/listar.component';
// import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { AdminComponent } from './admin/admin.component';
import {
  AgmCoreModule
} from '@agm/core';
import { ComponentsModule } from './components/components.module';
// import { ListarLixeirasComponent } from './rotas/listar-lixeiras/listar-lixeiras.component';
// import { ListarLixeirasComponent } from './rotas/listar-lixeiras/listar-lixeiras.component';
// import { ListarLixeirasComponent } from './rotas/listar-lixeiras/listar-lixeiras.component';
// import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,       
    AdminComponent,
    LoginComponent,
    GerarHoleriteComponent,
    ListarComponent
    // ListarLixeirasComponent,
    // ListarLixeirasComponent,
    // ListarLixeirasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,   
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,  
    HttpModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
