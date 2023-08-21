import { FornecedoresListaComponent } from './../templates/fornecedores-lista/fornecedores-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorFormCadastroComponent } from '../templates/fornecedor-form-cadastro/fornecedor-form-cadastro.component';

const routes: Routes = [
  { path: 'cadastrar', component: FornecedorFormCadastroComponent },
  { path: 'alterar', component: FornecedorFormCadastroComponent },
  { path: 'lista', component: FornecedoresListaComponent },
  { path: '', redirectTo: '/fornecedor/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresPageRoutingModule { }
