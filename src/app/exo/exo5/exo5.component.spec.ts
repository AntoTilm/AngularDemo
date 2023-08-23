import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo5Component } from './exo5.component';

describe('Exo5Component', () => {
  let component: Exo5Component;
  let fixture: ComponentFixture<Exo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo5Component]
    });
    fixture = TestBed.createComponent(Exo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
