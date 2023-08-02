import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCadastroClienteComponent } from './input-cadastro-cliente.component';

describe('InputCadastroClienteComponent', () => {
  let component: InputCadastroClienteComponent;
  let fixture: ComponentFixture<InputCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCadastroClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
