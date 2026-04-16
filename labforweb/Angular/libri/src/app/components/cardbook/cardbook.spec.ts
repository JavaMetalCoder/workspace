import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbook } from './cardbook';

describe('Cardbook', () => {
  let component: Cardbook;
  let fixture: ComponentFixture<Cardbook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardbook],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardbook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
