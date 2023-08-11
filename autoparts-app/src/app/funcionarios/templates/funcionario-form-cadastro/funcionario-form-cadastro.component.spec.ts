import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioFormCadastroComponent } from './funcionario-form-cadastro.component';

describe('FuncionarioFormCadastroComponent', () => {
  let component: FuncionarioFormCadastroComponent;
  let fixture: ComponentFixture<FuncionarioFormCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioFormCadastroComponent]
    });
    fixture = TestBed.createComponent(FuncionarioFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
