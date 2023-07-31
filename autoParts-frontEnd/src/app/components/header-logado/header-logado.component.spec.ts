import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogadoComponent } from './header-logado.component';

describe('HeaderLogadoComponent', () => {
  let component: HeaderLogadoComponent;
  let fixture: ComponentFixture<HeaderLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
