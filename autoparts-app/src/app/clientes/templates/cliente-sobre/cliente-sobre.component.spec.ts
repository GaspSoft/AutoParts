import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSobreComponent } from './cliente-sobre.component';

describe('ClienteSobreComponent', () => {
  let component: ClienteSobreComponent;
  let fixture: ComponentFixture<ClienteSobreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteSobreComponent]
    });
    fixture = TestBed.createComponent(ClienteSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
