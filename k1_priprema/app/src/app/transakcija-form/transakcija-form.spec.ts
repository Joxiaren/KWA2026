import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransakcijaForm } from './transakcija-form';

describe('TransakcijaForm', () => {
  let component: TransakcijaForm;
  let fixture: ComponentFixture<TransakcijaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransakcijaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransakcijaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
