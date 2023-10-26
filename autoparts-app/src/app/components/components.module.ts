import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { NavbarFuncionarioComponent } from './navbar-funcionario/navbar-funcionario.component';
import { SearchPipe } from './search/search.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarClienteComponent,
    NavbarFuncionarioComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarClienteComponent,
    NavbarFuncionarioComponent,
    SearchPipe
  ]
})
export class ComponentsModule { }
