import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './services/cliente/clientes.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FuncionariosService } from './services/funcionario/funcionarios.service';
import { AuthInterceptor } from './services/login/auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FornecedorService } from './services/fornecedor/fornecedor.service';
import { PecaService } from './services/pecas/peca.service';
import { NgxMaskModule } from 'ngx-mask';
import { AuthServiceService } from './services/auth/auth-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ClientesService,
    FuncionariosService,
    FornecedorService,
    PecaService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
