import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePagamentoComponent } from './cliente-pagamento.component';

describe('ClientePagamentoComponent', () => {
  let component: ClientePagamentoComponent;
  let fixture: ComponentFixture<ClientePagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientePagamentoComponent]
    });
    fixture = TestBed.createComponent(ClientePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
