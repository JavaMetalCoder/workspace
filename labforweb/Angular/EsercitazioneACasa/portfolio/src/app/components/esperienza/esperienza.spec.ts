import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esperienza } from './esperienza';

describe('Esperienza', () => {
  let component: Esperienza;
  let fixture: ComponentFixture<Esperienza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esperienza],
    }).compileComponents();

    fixture = TestBed.createComponent(Esperienza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
