import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormCadastroComponent } from '../../templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ClienteSobreComponent } from '../../templates/cliente-sobre/cliente-sobre.component';
import { ClienteFormPerfilComponent } from '../../templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClienteHomeComponent } from '../../templates/cliente-home/cliente-home.component';

const routes: Routes = [
  { path: 'cadastrar', component: ClienteFormCadastroComponent },
  { path: 'sobre', component: ClienteSobreComponent },
  { path: 'perfil', component: ClienteFormPerfilComponent },
  { path: 'home', component: ClienteHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePageRoutingModule { }
