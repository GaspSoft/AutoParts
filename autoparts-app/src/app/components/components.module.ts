import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { NavbarFuncionarioComponent } from './navbar-funcionario/navbar-funcionario.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarClienteComponent,
    NavbarFuncionarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarClienteComponent,
    NavbarFuncionarioComponent
  ]
})
export class ComponentsModule { }
