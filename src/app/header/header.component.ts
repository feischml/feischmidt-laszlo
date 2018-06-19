import { Component, OnInit } from '@angular/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SmoothScrollToDirective]
})
export class HeaderComponent implements OnInit {

  constructor( private scroll: SmoothScrollToDirective = new SmoothScrollToDirective()
  ){ }

  ngOnInit() {
  }

  public scrollTo(divId: String){
    this.scroll.scrollTo = divId;
    this.scroll.duration = 2500;
    this.scroll.offset = 80;
    // trigger the scroll
    this.scroll.onClick();

    // close the navbar
    this.closeNavbar();
  }

  private closeNavbar(){
    let button: HTMLElement = document.getElementById('buttonheader');
    if (button.getAttribute('class') == 'navbar-toggler')
      button.click();
  }

}
