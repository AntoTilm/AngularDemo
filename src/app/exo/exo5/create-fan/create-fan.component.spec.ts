import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFanComponent } from './create-fan.component';

describe('CreateFanComponent', () => {
  let component: CreateFanComponent;
  let fixture: ComponentFixture<CreateFanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFanComponent]
    });
    fixture = TestBed.createComponent(CreateFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
