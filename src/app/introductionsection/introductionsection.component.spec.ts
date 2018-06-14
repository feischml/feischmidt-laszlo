import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionsectionComponent } from './introductionsection.component';

describe('IntroductionsectionComponent', () => {
  let component: IntroductionsectionComponent;
  let fixture: ComponentFixture<IntroductionsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
