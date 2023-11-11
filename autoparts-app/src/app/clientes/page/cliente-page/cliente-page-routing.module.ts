import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClienteSobreComponent } from '../../templates/cliente-sobre/cliente-sobre.component';
import { ClienteFormPerfilComponent } from '../../templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClienteHomeComponent } from '../../templates/cliente-home/cliente-home.component';
import { ClienteCarrinhoComponent } from '../../templates/cliente-carrinho/cliente-carrinho.component';
import { ClienteCatalogoComponent } from '../../templates/cliente-catalogo/cliente-catalogo.component';
import { ClienteLoginComponent } from '../../templates/cliente-login/cliente-login.component';
import { ClienteAjudaComponent } from '../../templates/cliente-ajuda/cliente-ajuda.component';
import { ClienteCompraComponent } from '../../templates/cliente-compra/cliente-compra.component';
import { ClientePagamentoComponent } from '../../templates/cliente-pagamento/cliente-pagamento.component';
import { ClienteHistoricoComponent } from '../../templates/cliente-historico/cliente-historico.component';

const routes: Routes = [
  { path: 'cadastrar', component: ClienteFormCadastroComponent },
  { path: 'sobre', component: ClienteSobreComponent },
  { path: 'perfil', component: ClienteFormPerfilComponent },
  { path: 'home', component: ClienteHomeComponent },
  { path: 'carrinho', component: ClienteCarrinhoComponent },
  { path: 'catalogo', component: ClienteCatalogoComponent },
  { path: 'login', component: ClienteLoginComponent },
  { path: 'ajuda', component: ClienteAjudaComponent },
  { path: 'compra/:id', component: ClienteCompraComponent },
  { path: 'pagamento', component: ClientePagamentoComponent },
  { path: 'historico', component: ClienteHistoricoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
