import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordForm } from './add-word-form';

describe('AddWordForm', () => {
  let component: AddWordForm;
  let fixture: ComponentFixture<AddWordForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWordForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
