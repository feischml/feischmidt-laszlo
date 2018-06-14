import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindsetsectionComponent } from './mindsetsection.component';

describe('MindsetsectionComponent', () => {
  let component: MindsetsectionComponent;
  let fixture: ComponentFixture<MindsetsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindsetsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindsetsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
