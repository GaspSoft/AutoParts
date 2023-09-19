import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasDetalhesComponent } from './pecas-detalhes.component';

describe('PecasDetalhesComponent', () => {
  let component: PecasDetalhesComponent;
  let fixture: ComponentFixture<PecasDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasDetalhesComponent]
    });
    fixture = TestBed.createComponent(PecasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
