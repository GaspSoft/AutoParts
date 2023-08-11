import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormPerfilComponent } from './cliente-form-perfil.component';

describe('ClienteFormPerfilComponent', () => {
  let component: ClienteFormPerfilComponent;
  let fixture: ComponentFixture<ClienteFormPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteFormPerfilComponent]
    });
    fixture = TestBed.createComponent(ClienteFormPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
