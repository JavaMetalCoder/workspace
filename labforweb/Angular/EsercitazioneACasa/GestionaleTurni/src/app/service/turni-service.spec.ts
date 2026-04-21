import { TestBed } from '@angular/core/testing';

import { TurniService } from './turni-service';

describe('TurniService', () => {
  let service: TurniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
