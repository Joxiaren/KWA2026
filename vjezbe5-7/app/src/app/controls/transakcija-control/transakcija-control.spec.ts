import { TestBed } from '@angular/core/testing';

import { TransakcijaControl } from './transakcija-control';

describe('TransakcijaControl', () => {
  let service: TransakcijaControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransakcijaControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
