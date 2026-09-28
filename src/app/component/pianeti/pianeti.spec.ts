import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianeti } from './pianeti';

describe('Pianeti', () => {
  let component: Pianeti;
  let fixture: ComponentFixture<Pianeti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianeti],
    }).compileComponents();

    fixture = TestBed.createComponent(Pianeti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
