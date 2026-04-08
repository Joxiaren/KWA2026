import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransakcijaPage } from './transakcija-page';

describe('TransakcijaPage', () => {
  let component: TransakcijaPage;
  let fixture: ComponentFixture<TransakcijaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransakcijaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransakcijaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
