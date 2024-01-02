import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinguinComponent } from './pinguin.component';

describe('PinguinComponent', () => {
  let component: PinguinComponent;
  let fixture: ComponentFixture<PinguinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinguinComponent]
    });
    fixture = TestBed.createComponent(PinguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
