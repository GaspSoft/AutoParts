import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaFuncionarioComponent } from './lista-vazia-funcionario.component';

describe('ListaVaziaFuncionarioComponent', () => {
  let component: ListaVaziaFuncionarioComponent;
  let fixture: ComponentFixture<ListaVaziaFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVaziaFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ListaVaziaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
