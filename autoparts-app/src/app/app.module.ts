import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './services/cliente/clientes.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FuncionariosService } from './services/funcionario/funcionarios.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ClientesModule,
    FuncionariosModule
  ],
  providers: [
    ClientesService,
    FuncionariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
