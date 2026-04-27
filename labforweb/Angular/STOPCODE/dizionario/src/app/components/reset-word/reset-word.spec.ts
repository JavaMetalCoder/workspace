import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWord } from './reset-word';

describe('ResetWord', () => {
  let component: ResetWord;
  let fixture: ComponentFixture<ResetWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetWord],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetWord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
