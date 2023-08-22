/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClienteCarrinhoComponent } from './cliente-carrinho.component';

describe('ClienteCarrinhoComponent', () => {
  let component: ClienteCarrinhoComponent;
  let fixture: ComponentFixture<ClienteCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
