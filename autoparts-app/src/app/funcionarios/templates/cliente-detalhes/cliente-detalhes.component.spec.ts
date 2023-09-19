import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetalhesComponent } from './cliente-detalhes.component';

describe('ClienteDetalhesComponent', () => {
  let component: ClienteDetalhesComponent;
  let fixture: ComponentFixture<ClienteDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteDetalhesComponent]
    });
    fixture = TestBed.createComponent(ClienteDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
