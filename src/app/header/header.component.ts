import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SmoothScrollToDirective]
})
export class HeaderComponent implements OnInit {

  constructor( private scroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
               private element: ElementRef,
               private renderer: Renderer
  ){ }

  ngOnInit() {
  }

  private scrollTo(divId: String){
    this.scroll.scrollTo = divId;
    this.scroll.duration = 2500;
    this.scroll.offset = 80;
    // trigger the scroll
    this.scroll.onClick();

    // close the navbar
    this.closeNavbar();
  }

  private closeNavbar(){
    let navbar = this.element.nativeElement.querySelector('#navcol-1');
    //navbar.collapse('hide');
    console.log(navbar);
    this.renderer.setElementClass(navbar, 'in', false);

    //this.renderer.setElementClass(this.element.nativeElement.querySelector('#navcol-1'), 'collapse', hide); 
  }

}
