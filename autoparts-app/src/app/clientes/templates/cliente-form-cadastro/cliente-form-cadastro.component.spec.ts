import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormCadastroComponent } from './cliente-form-cadastro.component';

describe('ClienteFormCadastroComponent', () => {
  let component: ClienteFormCadastroComponent;
  let fixture: ComponentFixture<ClienteFormCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteFormCadastroComponent]
    });
    fixture = TestBed.createComponent(ClienteFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
