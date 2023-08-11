import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFuncionarioComponent } from './navbar-funcionario.component';

describe('NavbarFuncionarioComponent', () => {
  let component: NavbarFuncionarioComponent;
  let fixture: ComponentFixture<NavbarFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarFuncionarioComponent]
    });
    fixture = TestBed.createComponent(NavbarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
