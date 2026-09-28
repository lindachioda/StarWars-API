import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persone } from './persone';

describe('Persone', () => {
  let component: Persone;
  let fixture: ComponentFixture<Persone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persone],
    }).compileComponents();

    fixture = TestBed.createComponent(Persone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
