import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forma } from './forma';

describe('Forma', () => {
  let component: Forma;
  let fixture: ComponentFixture<Forma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
