import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListaComponent } from './clientes-lista.component';

describe('ClientesListaComponent', () => {
  let component: ClientesListaComponent;
  let fixture: ComponentFixture<ClientesListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesListaComponent]
    });
    fixture = TestBed.createComponent(ClientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
