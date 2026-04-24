import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginanoencontrada } from './paginanoencontrada';

describe('Paginanoencontrada', () => {
  let component: Paginanoencontrada;
  let fixture: ComponentFixture<Paginanoencontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paginanoencontrada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paginanoencontrada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
