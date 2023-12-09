import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTeaserComponent } from './welcome-teaser.component';

describe('WelcomeTeaserComponent', () => {
  let component: WelcomeTeaserComponent;
  let fixture: ComponentFixture<WelcomeTeaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeTeaserComponent]
    });
    fixture = TestBed.createComponent(WelcomeTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
