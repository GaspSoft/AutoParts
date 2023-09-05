import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClienteSobreComponent } from '../../templates/cliente-sobre/cliente-sobre.component';
import { ClienteFormPerfilComponent } from '../../templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClienteHomeComponent } from '../../templates/cliente-home/cliente-home.component';
import { ClienteCarrinhoComponent } from '../../templates/cliente-carrinho/cliente-carrinho.component';
import { ClienteCatalogoComponent } from '../../templates/cliente-catalogo/cliente-catalogo.component';
import { ClienteLoginComponent } from '../../templates/cliente-login/cliente-login.component';

const routes: Routes = [
  { path: 'cadastrar-cliente', component: ClienteFormCadastroComponent },
  { path: 'sobre-cliente', component: ClienteSobreComponent },
  { path: 'perfil-cliente', component: ClienteFormPerfilComponent },
  { path: 'home-cliente', component: ClienteHomeComponent },
  { path: 'carrinho-cliente', component: ClienteCarrinhoComponent },
  { path: 'catalogo-cliente', component: ClienteCatalogoComponent },
  { path: 'login-cliente', component: ClienteLoginComponent },
  { path: '', redirectTo: '/cliente/home-cliente', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
