import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emittente } from './emittente';

describe('Emittente', () => {
  let component: Emittente;
  let fixture: ComponentFixture<Emittente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emittente],
    }).compileComponents();

    fixture = TestBed.createComponent(Emittente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
