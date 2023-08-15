import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { FuncionariosListaComponent } from './templates/funcionarios-lista/funcionarios-lista.component';
import { FuncionarioPageComponent } from './page/funcionario-page/funcionario-page.component';

const routes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioPageComponent,
    loadChildren: () => import('./page/funcionario-page/funcionario-page.module').then(m => m.FuncionarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
