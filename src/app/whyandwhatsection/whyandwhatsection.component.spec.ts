import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyandwhatsectionComponent } from './whyandwhatsection.component';

describe('WhyandwhatsectionComponent', () => {
  let component: WhyandwhatsectionComponent;
  let fixture: ComponentFixture<WhyandwhatsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyandwhatsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyandwhatsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
