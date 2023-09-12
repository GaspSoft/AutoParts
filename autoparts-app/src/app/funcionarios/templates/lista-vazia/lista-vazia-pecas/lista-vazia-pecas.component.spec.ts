import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaPecasComponent } from './lista-vazia-pecas.component';

describe('ListaVaziaPecasComponent', () => {
  let component: ListaVaziaPecasComponent;
  let fixture: ComponentFixture<ListaVaziaPecasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVaziaPecasComponent]
    });
    fixture = TestBed.createComponent(ListaVaziaPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
