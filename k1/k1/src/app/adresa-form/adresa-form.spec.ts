import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresaForm } from './adresa-form';

describe('AdresaForm', () => {
  let component: AdresaForm;
  let fixture: ComponentFixture<AdresaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdresaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AdresaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
