import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentForm } from './klijent-form';

describe('KlijentForm', () => {
  let component: KlijentForm;
  let fixture: ComponentFixture<KlijentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlijentForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlijentForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
