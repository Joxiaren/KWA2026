import { TestBed } from '@angular/core/testing';

import { KlijentControl } from './klijent-control';

describe('KlijentControl', () => {
  let service: KlijentControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlijentControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
