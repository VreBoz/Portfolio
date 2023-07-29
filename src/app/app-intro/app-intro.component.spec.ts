import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIntroComponent } from './app-intro.component';

describe('AppIntroComponent', () => {
  let component: AppIntroComponent;
  let fixture: ComponentFixture<AppIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppIntroComponent]
    });
    fixture = TestBed.createComponent(AppIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
