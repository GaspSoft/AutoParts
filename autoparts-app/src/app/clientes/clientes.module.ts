import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormCadastroComponent } from './templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormPerfilComponent } from './templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClientePageComponent } from './page/cliente-page/cliente-page.component';
import { ClienteSobreComponent } from './templates/cliente-sobre/cliente-sobre.component';
import { ClienteHomeComponent } from './templates/cliente-home/cliente-home.component';
import { ClienteCarrinhoComponent } from './templates/cliente-carrinho/cliente-carrinho.component';
<<<<<<< HEAD
import { ClienteCompraComponent } from './templates/cliente-compra/cliente-compra.component';
=======
import { ClienteCatalogoComponent } from './templates/cliente-catalogo/cliente-catalogo.component';
import { ClienteLoginComponent } from './templates/cliente-login/cliente-login.component';
import { ClienteAjudaComponent } from './templates/cliente-ajuda/cliente-ajuda.component';
>>>>>>> main

@NgModule({
  declarations: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientePageComponent,
    ClienteSobreComponent,
    ClienteHomeComponent,
    ClienteCarrinhoComponent,
<<<<<<< HEAD
    ClienteCompraComponent
=======
    ClienteCatalogoComponent,
    ClienteLoginComponent,
    ClienteAjudaComponent
>>>>>>> main
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ClientesRoutingModule,
    FormsModule,
  ],
  exports: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClienteSobreComponent,
    ClienteHomeComponent,
    ClienteCarrinhoComponent,
    ClienteCatalogoComponent,
    ClienteLoginComponent,
    ClienteAjudaComponent
  ]
})
export class ClientesModule { }
