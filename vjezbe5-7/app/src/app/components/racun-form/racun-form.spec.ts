import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunForm } from './racun-form';

describe('RacunForm', () => {
  let component: RacunForm;
  let fixture: ComponentFixture<RacunForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacunForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacunForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
