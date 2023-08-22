import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasFormsCadastroComponent } from './pecas-forms-cadastro.component';

describe('PecasFormsCadastroComponent', () => {
  let component: PecasFormsCadastroComponent;
  let fixture: ComponentFixture<PecasFormsCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasFormsCadastroComponent]
    });
    fixture = TestBed.createComponent(PecasFormsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
