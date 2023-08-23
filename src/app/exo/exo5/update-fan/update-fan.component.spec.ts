import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFanComponent } from './update-fan.component';

describe('UpdateFanComponent', () => {
  let component: UpdateFanComponent;
  let fixture: ComponentFixture<UpdateFanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFanComponent]
    });
    fixture = TestBed.createComponent(UpdateFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
