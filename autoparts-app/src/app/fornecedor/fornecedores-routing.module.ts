import { FornecedorPageComponent } from './page/fornecedor-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'funcionario',
    component: FornecedorPageComponent,
    loadChildren: () => import('./page/fornecedor-page.module').then(m => m.FornecedorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
