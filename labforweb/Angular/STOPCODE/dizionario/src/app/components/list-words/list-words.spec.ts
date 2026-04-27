import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWords } from './list-words';

describe('ListWords', () => {
  let component: ListWords;
  let fixture: ComponentFixture<ListWords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWords],
    }).compileComponents();

    fixture = TestBed.createComponent(ListWords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
