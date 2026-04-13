import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCorsi } from './card-corsi';

describe('CardCorsi', () => {
  let component: CardCorsi;
  let fixture: ComponentFixture<CardCorsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCorsi],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCorsi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
