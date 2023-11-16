import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePageComponent } from './page/cliente-page/cliente-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientePageComponent,
    loadChildren: () => import('./page/cliente-page/cliente-page.module').then(m => m.ClientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
