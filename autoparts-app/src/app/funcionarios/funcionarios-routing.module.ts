import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { FuncionariosListaComponent } from './templates/funcionarios-lista/funcionarios-lista.component';

const routes: Routes = [
  { path: 'funcionario-cadastro', component: FuncionarioFormCadastroComponent },
  { path: 'funcionario-cadastro/', component: FuncionarioFormCadastroComponent },
  { path: 'funcionario-lista', component: FuncionariosListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
