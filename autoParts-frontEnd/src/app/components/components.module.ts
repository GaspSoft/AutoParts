import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponent } from './header-logado/header-logado.component';
import { HeaderNaoLogadoComponent } from './header-nao-logado/header-nao-logado.component';
import { FooterComponent } from './footer/footer.component';
import { InputCadastroClienteComponent } from './input-cadastro-cliente/input-cadastro-cliente.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    HeaderLogadoComponent,
    HeaderNaoLogadoComponent,
    FooterComponent,
    InputCadastroClienteComponent,
    PerfilComponent
  ],
  exports: [
    HeaderLogadoComponent,
    HeaderNaoLogadoComponent,
    FooterComponent,
    InputCadastroClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
