import { TestBed } from '@angular/core/testing';

import { RacunControl } from './racun-control';

describe('RacunControl', () => {
  let service: RacunControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacunControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
