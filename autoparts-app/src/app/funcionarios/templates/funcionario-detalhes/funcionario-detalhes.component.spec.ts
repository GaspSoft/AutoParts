import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDetalhesComponent } from './funcionario-detalhes.component';

describe('FuncionarioDetalhesComponent', () => {
  let component: FuncionarioDetalhesComponent;
  let fixture: ComponentFixture<FuncionarioDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioDetalhesComponent]
    });
    fixture = TestBed.createComponent(FuncionarioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
