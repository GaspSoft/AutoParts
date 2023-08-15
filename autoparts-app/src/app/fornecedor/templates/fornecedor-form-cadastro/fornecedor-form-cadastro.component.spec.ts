import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorFormCadastroComponent } from './fornecedor-form-cadastro.component';

describe('FornecedorFormCadastroComponent', () => {
  let component: FornecedorFormCadastroComponent;
  let fixture: ComponentFixture<FornecedorFormCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornecedorFormCadastroComponent]
    });
    fixture = TestBed.createComponent(FornecedorFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
