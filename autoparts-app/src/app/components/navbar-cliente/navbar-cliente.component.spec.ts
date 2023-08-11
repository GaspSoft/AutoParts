import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClienteComponent } from './navbar-cliente.component';

describe('NavbarClienteComponent', () => {
  let component: NavbarClienteComponent;
  let fixture: ComponentFixture<NavbarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarClienteComponent]
    });
    fixture = TestBed.createComponent(NavbarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
