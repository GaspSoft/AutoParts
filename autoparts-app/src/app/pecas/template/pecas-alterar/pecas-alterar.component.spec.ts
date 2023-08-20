import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasAlterarComponent } from './pecas-alterar.component';

describe('PecasAlterarComponent', () => {
  let component: PecasAlterarComponent;
  let fixture: ComponentFixture<PecasAlterarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasAlterarComponent]
    });
    fixture = TestBed.createComponent(PecasAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
