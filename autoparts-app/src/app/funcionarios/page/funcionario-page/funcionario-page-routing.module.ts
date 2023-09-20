import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormCadastroComponent } from '../../templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { FuncionariosListaComponent } from '../../templates/funcionarios-lista/funcionarios-lista.component';
import { ClientesListaComponent } from '../../templates/clientes-lista/clientes-lista.component';
import { FornecedorFormCadastroComponent } from '../../templates/fornecedor-form-cadastro/fornecedor-form-cadastro.component';
import { FornecedoresListaComponent } from '../../templates/fornecedores-lista/fornecedores-lista.component';
import { PecasFormsCadastroComponent } from '../../templates/pecas-forms-cadastro/pecas-forms-cadastro.component';
import { PecasListaComponent } from '../../templates/pecas-lista/pecas-lista.component';
import { PainelComponent } from '../../templates/painel/painel.component';
import { FuncionarioDetalhesComponent } from '../../templates/funcionario-detalhes/funcionario-detalhes.component';
import { FornecedorDetalhesComponent } from '../../templates/fornecedor-detalhes/fornecedor-detalhes.component';
import { PecasDetalhesComponent } from '../../templates/pecas-detalhes/pecas-detalhes.component';

const routes: Routes = [

  { path: 'lista-cliente', component: ClientesListaComponent },

  { path: 'cadastro-funcionario', component: FuncionarioFormCadastroComponent },
  { path: 'alterar-funcionario', component: FuncionarioFormCadastroComponent },
  { path: 'lista-funcionario', component: FuncionariosListaComponent },
  { path: 'detalhes-funcionario/:id', component: FuncionarioDetalhesComponent},

  { path: 'lista-fornecedor', component: FornecedoresListaComponent },
  { path: 'cadastro-fornecedor', component: FornecedorFormCadastroComponent },
  { path: 'alterar-fornecedor', component: FornecedorFormCadastroComponent },
  { path: 'detalhes-fornecedor/:id', component: FornecedorDetalhesComponent },

  { path: 'cadastro-pecas', component: PecasFormsCadastroComponent },
  { path: 'lista-pecas', component: PecasListaComponent },
  { path: 'alterar-pecas', component: PecasFormsCadastroComponent },
  { path: 'detalhes-pecas/:id', component: PecasDetalhesComponent },

  { path: 'painel', component: PainelComponent },
  { path: '', redirectTo: '/funcionario/painel', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioPageRoutingModule { }
