import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaForm } from './osoba-form';

describe('OsobaForm', () => {
  let component: OsobaForm;
  let fixture: ComponentFixture<OsobaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
