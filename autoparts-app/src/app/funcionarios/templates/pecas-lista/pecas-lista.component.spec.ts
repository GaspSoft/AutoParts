import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasListaComponent } from './pecas-lista.component';

describe('PecasListaComponent', () => {
  let component: PecasListaComponent;
  let fixture: ComponentFixture<PecasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasListaComponent]
    });
    fixture = TestBed.createComponent(PecasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
