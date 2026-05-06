import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailViewPage } from './order-detail-view-page';

describe('OrderDetailViewPage', () => {
  let component: OrderDetailViewPage;
  let fixture: ComponentFixture<OrderDetailViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
