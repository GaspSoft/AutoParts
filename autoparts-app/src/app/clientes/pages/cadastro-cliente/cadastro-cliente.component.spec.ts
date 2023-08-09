import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCLienteComponent } from './cadastro-cliente.component';

describe('CadastroCLienteComponent', () => {
  let component: CadastroCLienteComponent;
  let fixture: ComponentFixture<CadastroCLienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCLienteComponent]
    });
    fixture = TestBed.createComponent(CadastroCLienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
