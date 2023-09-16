import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosListaComponent } from './templates/funcionarios-lista/funcionarios-lista.component';
import { FuncionarioPageComponent } from './page/funcionario-page/funcionario-page.component';
import { ClientesListaComponent } from './templates/clientes-lista/clientes-lista.component';
import { FornecedorFormCadastroComponent } from './templates/fornecedor-form-cadastro/fornecedor-form-cadastro.component';
import { FornecedoresListaComponent } from './templates/fornecedores-lista/fornecedores-lista.component';
import { PecasFormsCadastroComponent } from './templates/pecas-forms-cadastro/pecas-forms-cadastro.component';
import { PecasListaComponent } from './templates/pecas-lista/pecas-lista.component';
import { PainelComponent } from './templates/painel/painel.component';
import { ListaVaziaFuncionarioComponent } from './templates/lista-vazia/lista-vazia-funcionario/lista-vazia-funcionario.component';
import { ListaVaziaPecasComponent } from './templates/lista-vazia/lista-vazia-pecas/lista-vazia-pecas.component';
import { ListaVaziaFornecedorComponent } from './templates/lista-vazia/lista-vazia-fornecedor/lista-vazia-fornecedor.component';
import { ListaVaziaClienteComponent } from './templates/lista-vazia/lista-vazia-cliente/lista-vazia-cliente.component';
import { NgxMaskModule } from 'ngx-mask';
import { FornecedorDetalhesComponent } from './templates/fornecedor-detalhes/fornecedor-detalhes.component';
import { ClienteDetalhesComponent } from './templates/cliente-detalhes/cliente-detalhes.component';
import { PecasDetalhesComponent } from './templates/pecas-detalhes/pecas-detalhes.component';
import { FuncionarioDetalhesComponent } from './templates/funcionario-detalhes/funcionario-detalhes.component';
import { SearchPipe } from '../model/pipes/search.pipe';

@NgModule({
  declarations: [
    FuncionarioFormCadastroComponent,
    FuncionariosListaComponent,
    FuncionarioPageComponent,
    ClientesListaComponent,
    FornecedorFormCadastroComponent,
    FornecedoresListaComponent,
    PecasFormsCadastroComponent,
    PecasListaComponent,
    PainelComponent,
    ListaVaziaFuncionarioComponent,
    ListaVaziaPecasComponent,
    ListaVaziaFornecedorComponent,
    ListaVaziaClienteComponent,
    FornecedorDetalhesComponent,
    ClienteDetalhesComponent,
    PecasDetalhesComponent,
    FuncionarioDetalhesComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    FuncionariosRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    FuncionarioFormCadastroComponent,
    FuncionariosListaComponent,
    ClientesListaComponent,
    FornecedorFormCadastroComponent,
    FornecedoresListaComponent,
    PecasFormsCadastroComponent,
    PecasListaComponent
  ]
})
export class FuncionariosModule { }
