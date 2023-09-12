import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaClienteComponent } from './lista-vazia-cliente.component';

describe('ListaVaziaClienteComponent', () => {
  let component: ListaVaziaClienteComponent;
  let fixture: ComponentFixture<ListaVaziaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVaziaClienteComponent]
    });
    fixture = TestBed.createComponent(ListaVaziaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
