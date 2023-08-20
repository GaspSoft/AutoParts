import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClienteSobreComponent } from '../../templates//cliente-sobre/cliente-sobre.component';

const routes: Routes = [
  { path: 'cadastrar', component: ClienteFormCadastroComponent },
  { path: 'perfil', component: ClienteSobreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
