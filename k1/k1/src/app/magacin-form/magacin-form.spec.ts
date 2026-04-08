import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagacinForm } from './magacin-form';

describe('MagacinForm', () => {
  let component: MagacinForm;
  let fixture: ComponentFixture<MagacinForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagacinForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MagacinForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
