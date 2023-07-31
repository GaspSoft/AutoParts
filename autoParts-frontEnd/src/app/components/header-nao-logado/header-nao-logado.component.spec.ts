import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNaoLogadoComponent } from './header-nao-logado.component';

describe('HeaderNaoLogadoComponent', () => {
  let component: HeaderNaoLogadoComponent;
  let fixture: ComponentFixture<HeaderNaoLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNaoLogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNaoLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
