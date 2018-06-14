import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsectionComponent } from './sportsection.component';

describe('SportsectionComponent', () => {
  let component: SportsectionComponent;
  let fixture: ComponentFixture<SportsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
