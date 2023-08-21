import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClienteSobreComponent } from '../../templates/cliente-sobre/cliente-sobre.component';
import { ClienteFormPerfilComponent } from '../../templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClienteHomeComponent } from '../../templates/cliente-home/cliente-home.component';

const routes: Routes = [
  { path: 'cadastrar-cliente', component: ClienteFormCadastroComponent },
  { path: 'sobre-cliente', component: ClienteSobreComponent },
  { path: 'perfil-cliente', component: ClienteFormPerfilComponent },
  { path: 'home-cliente', component: ClienteHomeComponent },
  { path: '', redirectTo: '/cliente/lista-cliente', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
