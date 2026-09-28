import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dettagli } from './dettagli';

describe('Dettagli', () => {
  let component: Dettagli;
  let fixture: ComponentFixture<Dettagli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dettagli],
    }).compileComponents();

    fixture = TestBed.createComponent(Dettagli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
