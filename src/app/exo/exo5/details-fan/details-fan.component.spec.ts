import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFanComponent } from './details-fan.component';

describe('DetailsFanComponent', () => {
  let component: DetailsFanComponent;
  let fixture: ComponentFixture<DetailsFanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFanComponent]
    });
    fixture = TestBed.createComponent(DetailsFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
