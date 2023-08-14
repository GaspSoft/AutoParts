import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';


const routes: Routes = [
  { path: 'cadastrar', component: ClienteFormCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
