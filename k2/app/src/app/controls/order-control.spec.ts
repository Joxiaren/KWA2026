import { TestBed } from '@angular/core/testing';

import { OrderControl } from './order-control';

describe('OrderControl', () => {
  let service: OrderControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
