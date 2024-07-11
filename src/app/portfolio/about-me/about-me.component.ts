import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {UtilityService} from "../services/utility/utility.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild("animatedTextRef") animatedTextRef!: ElementRef;
  @ViewChild("scrollSection") scrollSection!: ElementRef;

  constructor(private renderer: Renderer2, private utility: UtilityService) {
  }

  ngAfterViewInit() {
    this.utility.populateWords(this.animatedTextRef, this.renderer);
  }

  /**
   *the @HostListener is used to bind this function to the window scroll event
   */
  @HostListener("window: scroll", [])
  onWindowScroll(animatedTextRef: ElementRef, renderer: Renderer2) {
    //get the current scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    //position of the entire component within the document
    let elementPosition = this.scrollSection?.nativeElement.offsetTop;
    // determine whether the el is within the viewport or the visible area
    if (scrollPosition + window.innerHeight > elementPosition) {
      this.utility.triggerAnimation(this.animatedTextRef, this.renderer);
    }
  }
}
