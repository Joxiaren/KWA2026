import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransakcijaTabela } from './transakcija-tabela';

describe('TransakcijaTabela', () => {
  let component: TransakcijaTabela;
  let fixture: ComponentFixture<TransakcijaTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransakcijaTabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransakcijaTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
