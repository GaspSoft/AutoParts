import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module de componentes
import { ComponentsModule } from '../components/components.module';

// Module de rounting
import { RoutingModule } from './routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
