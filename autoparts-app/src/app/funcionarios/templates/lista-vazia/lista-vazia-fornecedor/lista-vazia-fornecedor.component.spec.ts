import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaFornecedorComponent } from './lista-vazia-fornecedor.component';

describe('ListaVaziaFornecedorComponent', () => {
  let component: ListaVaziaFornecedorComponent;
  let fixture: ComponentFixture<ListaVaziaFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVaziaFornecedorComponent]
    });
    fixture = TestBed.createComponent(ListaVaziaFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
