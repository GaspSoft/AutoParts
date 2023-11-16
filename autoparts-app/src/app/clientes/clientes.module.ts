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
import { ClienteCompraComponent } from './templates/cliente-compra/cliente-compra.component';
import { ClienteAjudaComponent } from './templates/cliente-ajuda/cliente-ajuda.component';
import { ClienteCatalogoComponent } from './templates/cliente-catalogo/cliente-catalogo.component';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteLoginComponent } from './templates/cliente-login/cliente-login.component';
import { ClientePagamentoComponent } from './templates/cliente-pagamento/cliente-pagamento.component';
import { ClienteHistoricoComponent } from './templates/cliente-historico/cliente-historico.component';
import { ListaVaziaHistoricoComponent } from './templates/lista-vazia/lista-vazia-historico/lista-vazia-historico.component';

@NgModule({
  declarations: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientePageComponent,
    ClienteSobreComponent,
    ClienteHomeComponent,
    ClienteLoginComponent,
    ClienteCarrinhoComponent,
    ClienteCompraComponent,
    ClienteCatalogoComponent,
    ClienteAjudaComponent,
    ClientePagamentoComponent,
    ClienteHistoricoComponent,
    ListaVaziaHistoricoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ClientesRoutingModule,
    FormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientePageComponent,
    ClienteSobreComponent,
    ClienteHomeComponent,
    ClienteLoginComponent,
    ClienteCarrinhoComponent,
    ClienteCompraComponent,
    ClienteCatalogoComponent,
    ClienteAjudaComponent,
    ClienteHistoricoComponent,
    ListaVaziaHistoricoComponent
  ]
})
export class ClientesModule { }
