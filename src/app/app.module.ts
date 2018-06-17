import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SportsectionComponent } from './sportsection/sportsection.component';
import { IntroductionsectionComponent } from './introductionsection/introductionsection.component';
import { JobsectionComponent } from './jobsection/jobsection.component';
import { WhyandwhatsectionComponent } from './whyandwhatsection/whyandwhatsection.component';
import { BookssectionComponent } from './bookssection/bookssection.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { MindsetsectionComponent } from './mindsetsection/mindsetsection.component';

// import smooth scroll
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportsectionComponent,
    IntroductionsectionComponent,
    JobsectionComponent,
    WhyandwhatsectionComponent,
    BookssectionComponent,
    FootersectionComponent,
    MindsetsectionComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
