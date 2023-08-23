import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrackApiComponent } from './create-track-api.component';

describe('CreateTrackApiComponent', () => {
  let component: CreateTrackApiComponent;
  let fixture: ComponentFixture<CreateTrackApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTrackApiComponent]
    });
    fixture = TestBed.createComponent(CreateTrackApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
