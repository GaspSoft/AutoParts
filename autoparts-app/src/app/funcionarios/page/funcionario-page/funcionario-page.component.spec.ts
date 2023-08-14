import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioPageComponent } from './funcionario-page.component';

describe('FuncionarioPageComponent', () => {
  let component: FuncionarioPageComponent;
  let fixture: ComponentFixture<FuncionarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioPageComponent]
    });
    fixture = TestBed.createComponent(FuncionarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
