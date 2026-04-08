import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentTabela } from './klijent-tabela';

describe('KlijentTabela', () => {
  let component: KlijentTabela;
  let fixture: ComponentFixture<KlijentTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlijentTabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlijentTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
