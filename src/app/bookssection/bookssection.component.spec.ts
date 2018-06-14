import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookssectionComponent } from './bookssection.component';

describe('BookssectionComponent', () => {
  let component: BookssectionComponent;
  let fixture: ComponentFixture<BookssectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookssectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
