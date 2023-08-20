import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasListagemComponent } from './pecas-listagem.component';

describe('PecasListagemComponent', () => {
  let component: PecasListagemComponent;
  let fixture: ComponentFixture<PecasListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasListagemComponent]
    });
    fixture = TestBed.createComponent(PecasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
