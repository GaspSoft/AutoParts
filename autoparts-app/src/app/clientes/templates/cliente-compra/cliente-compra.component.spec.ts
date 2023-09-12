import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCompraComponent } from './cliente-compra.component';

describe('ClienteCompraComponent', () => {
  let component: ClienteCompraComponent;
  let fixture: ComponentFixture<ClienteCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCompraComponent]
    });
    fixture = TestBed.createComponent(ClienteCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
