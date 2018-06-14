import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsectionComponent } from './jobsection.component';

describe('JobsectionComponent', () => {
  let component: JobsectionComponent;
  let fixture: ComponentFixture<JobsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
