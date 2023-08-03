import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module de componentes
import { ComponentsModule } from '../components/components.module';

// Module de rounting
import { RoutingModule } from './routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { AjudaCadastroComponent } from './ajuda-cadastro/ajuda-cadastro.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilModule } from '../perfil/perfil.module';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    LoginComponent,
    HomeComponent,
    CarrinhoComponent,
    FinalizarCompraComponent,
    InstitucionalComponent,
    AjudaCadastroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule,
    PerfilModule
  ]
})
export class PagesModule { }
