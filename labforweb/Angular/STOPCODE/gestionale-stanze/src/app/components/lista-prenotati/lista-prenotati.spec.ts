import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenotati } from './lista-prenotati';

describe('ListaPrenotati', () => {
  let component: ListaPrenotati;
  let fixture: ComponentFixture<ListaPrenotati>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPrenotati],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPrenotati);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
