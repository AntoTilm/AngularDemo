import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10Component } from './demo10.component';

describe('Demo10Component', () => {
  let component: Demo10Component;
  let fixture: ComponentFixture<Demo10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo10Component]
    });
    fixture = TestBed.createComponent(Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
