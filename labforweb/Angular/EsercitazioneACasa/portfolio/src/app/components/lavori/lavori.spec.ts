import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lavori } from './lavori';

describe('Lavori', () => {
  let component: Lavori;
  let fixture: ComponentFixture<Lavori>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lavori],
    }).compileComponents();

    fixture = TestBed.createComponent(Lavori);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
