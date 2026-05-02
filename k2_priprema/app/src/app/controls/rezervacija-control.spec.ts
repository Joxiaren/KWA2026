import { TestBed } from '@angular/core/testing';

import { RezervacijaControl } from './rezervacija-control';

describe('RezervacijaControl', () => {
  let service: RezervacijaControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervacijaControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
