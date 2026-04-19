import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStanza } from './card-stanza';

describe('CardStanza', () => {
  let component: CardStanza;
  let fixture: ComponentFixture<CardStanza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStanza],
    }).compileComponents();

    fixture = TestBed.createComponent(CardStanza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
