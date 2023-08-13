import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from './templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClientesListaComponent } from './templates/clientes-lista/clientes-lista.component';

const routes: Routes = [
  { path: 'clientes-cadastro', component: ClienteFormCadastroComponent },
  { path: 'clientes-lista', component: ClientesListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
