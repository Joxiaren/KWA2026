import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunTabela } from './racun-tabela';

describe('RacunTabela', () => {
  let component: RacunTabela;
  let fixture: ComponentFixture<RacunTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacunTabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacunTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
