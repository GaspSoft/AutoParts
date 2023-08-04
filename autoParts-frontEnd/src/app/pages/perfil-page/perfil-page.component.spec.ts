import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPageComponent } from './perfil-page.component';

describe('PerfilPageComponent', () => {
  let component: PerfilPageComponent;
  let fixture: ComponentFixture<PerfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
