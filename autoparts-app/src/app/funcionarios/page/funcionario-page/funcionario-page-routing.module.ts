import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormCadastroComponent } from '../../templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { FuncionariosListaComponent } from '../../templates/funcionarios-lista/funcionarios-lista.component';

const routes: Routes = [
  { path: 'cadastrar', component: FuncionarioFormCadastroComponent },
  { path: 'alterar', component: FuncionarioFormCadastroComponent },
  { path: 'lista', component: FuncionariosListaComponent },
  { path: '', redirectTo: '/funcionario/lista', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioPageRoutingModule { }
