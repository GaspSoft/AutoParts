import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasCardsComponent } from './pecas-cards.component';

describe('PecasCardsComponent', () => {
  let component: PecasCardsComponent;
  let fixture: ComponentFixture<PecasCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasCardsComponent]
    });
    fixture = TestBed.createComponent(PecasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
