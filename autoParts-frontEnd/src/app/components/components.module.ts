import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponent } from './header-logado/header-logado.component';
import { HeaderNaoLogadoComponent } from './header-nao-logado/header-nao-logado.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderLogadoComponent,
    HeaderNaoLogadoComponent,
    FooterComponent
  ],
  exports: [
    HeaderLogadoComponent,
    HeaderNaoLogadoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
