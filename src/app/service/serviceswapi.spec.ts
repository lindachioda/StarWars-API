import { TestBed } from '@angular/core/testing';

import { Serviceswapi } from './serviceswapi';

describe('Serviceswapi', () => {
  let service: Serviceswapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceswapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
