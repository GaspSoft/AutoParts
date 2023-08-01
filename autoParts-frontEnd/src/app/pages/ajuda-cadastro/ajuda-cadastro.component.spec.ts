import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaCadastroComponent } from './ajuda-cadastro.component';

describe('AjudaCadastroComponent', () => {
  let component: AjudaCadastroComponent;
  let fixture: ComponentFixture<AjudaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
