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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FornecedorService } from './services/fornecedor/fornecedor.service';
import { PecaService } from './services/pecas/peca.service';

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
    FuncionariosModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ClientesService,
    FuncionariosService,
    FornecedorService,
    PecaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
