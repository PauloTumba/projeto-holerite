import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './rotas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerarHoleriteComponent } from './rotas/gerar-holerite/gerar-holerite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpcoesHoleriteComponent } from './rotas/opcoes-holerite/opcoes-holerite.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GerarHoleriteComponent,
    OpcoesHoleriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
