import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';

const routes: Routes = [
  { path: 'funcionario-cadastro', component: FuncionarioFormCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
