import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackApiComponent } from './update-track-api.component';

describe('UpdateTrackApiComponent', () => {
  let component: UpdateTrackApiComponent;
  let fixture: ComponentFixture<UpdateTrackApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrackApiComponent]
    });
    fixture = TestBed.createComponent(UpdateTrackApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
