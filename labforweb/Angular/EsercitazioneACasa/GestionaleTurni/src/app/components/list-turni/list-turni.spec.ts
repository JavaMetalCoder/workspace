import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurni } from './list-turni';

describe('ListTurni', () => {
  let component: ListTurni;
  let fixture: ComponentFixture<ListTurni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTurni],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTurni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
