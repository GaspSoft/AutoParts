import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorPageComponent } from './fornecedor-page.component';

describe('FornecedorPageComponent', () => {
  let component: FornecedorPageComponent;
  let fixture: ComponentFixture<FornecedorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornecedorPageComponent]
    });
    fixture = TestBed.createComponent(FornecedorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
