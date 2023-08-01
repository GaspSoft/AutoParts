import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module de componentes
import { ComponentsModule } from '../components/components.module';

// Module de rounting
import { RoutingModule } from './routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { AjudaCadastroComponent } from './ajuda-cadastro/ajuda-cadastro.component';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    LoginComponent,
    HomeComponent,
    SobreComponent,
    CarrinhoComponent,
    FinalizarCompraComponent,
    InstitucionalComponent,
    AjudaCadastroComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
