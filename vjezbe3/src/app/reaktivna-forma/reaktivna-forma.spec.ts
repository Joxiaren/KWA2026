import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaktivnaForma } from './reaktivna-forma';

describe('ReaktivnaForma', () => {
  let component: ReaktivnaForma;
  let fixture: ComponentFixture<ReaktivnaForma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaktivnaForma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaktivnaForma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
