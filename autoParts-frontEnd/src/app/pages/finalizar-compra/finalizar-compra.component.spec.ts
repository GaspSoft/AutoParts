import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCompraComponent } from './finalizar-compra.component';

describe('FinalizarCompraComponent', () => {
  let component: FinalizarCompraComponent;
  let fixture: ComponentFixture<FinalizarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
