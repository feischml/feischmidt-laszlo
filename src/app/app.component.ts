import { Component } from '@angular/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SmoothScrollToDirective]
})
export class AppComponent {

  title = 'Laszlo Feischmidt';

  constructor( private scroll: SmoothScrollToDirective = new SmoothScrollToDirective()
  ){ }

  public scrollTo(divId: String){
    this.scroll.scrollTo = divId;
    this.scroll.duration = 1500;
    this.scroll.offset = 80;
    // trigger the scroll
    this.scroll.onClick();
  }

}