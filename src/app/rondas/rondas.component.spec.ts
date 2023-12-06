import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondasComponent } from './rondas.component';

describe('RondasComponent', () => {
  let component: RondasComponent;
  let fixture: ComponentFixture<RondasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondasComponent]
    });
    fixture = TestBed.createComponent(RondasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
