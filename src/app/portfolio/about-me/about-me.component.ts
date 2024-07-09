import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  private a: HTMLElement | undefined;
  private b: HTMLElement | undefined;
  @ViewChild("animatedTextRef") animatedTextRef: ElementRef | undefined;
  @ViewChild("scrollSection") scrollSection: ElementRef | undefined;
  private message: string | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.message = "With over three years of expertise as a full stack developer specializing in Java Spring Boot, I bring a robust\n" +
      "skill set in backend development to create scalable and efficient web applications. Proficient in designing and\n" +
      "implementing Restful APIs, I ensure seamless integration between frontend interfaces and databases such as MySQL,\n" +
      "PostgreSQL, and MongoDB. My frontend proficiency includes HTML5, CSS3, and JavaScript frameworks like React.js,\n" +
      "Angular, and Vue.js, enabling me to deliver responsive and user-friendly interfaces. I am adept in Agile\n" +
      "methodologies, collaborating closely with cross-functional teams to iteratively deliver features while maintaining\n" +
      "code quality through automated testing and continuous integration. Passionate about staying updated with emerging\n" +
      "technologies, I am dedicated to enhancing system performance and user experiences through innovative solutions and\n" +
      "best practices."
  }

  ngAfterViewInit() {
    this.populateWords();
  }


  private populateWords() {
    console.log("check")
    if (this.animatedTextRef?.nativeElement) {
      console.log("check")
      const words = this.message?.split(" ");
      words?.forEach((word: string, ix: number) => {
        const span = this.renderer.createElement("span");
        const nodeOfWord = this.renderer.createText(word);
        this.renderer.appendChild(span, nodeOfWord);
        this.renderer.appendChild(this.animatedTextRef?.nativeElement, span);
        //if word is not the last item in the array
        if (ix < words.length - 1) {
          const space = this.renderer.createText(" ");
          this.renderer.appendChild(this.animatedTextRef?.nativeElement, space);
        }
      })
    }
  }

  private triggerAnimation() {
    const spans = this.animatedTextRef?.nativeElement?.querySelectorAll("span");
    spans.forEach((span: HTMLElement, ix: number) => {
      setTimeout(() => {
        this.renderer.addClass(span, "animated");
      }, ix * 100);
    })
  }

  /**
   *the @HostListener is used to bind this function to the window scroll event
   */
  @HostListener("window: scroll", [])
  onWindowScroll() {
    //get the current scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    //position of the entire component within the document
    let elementPosition = this.scrollSection?.nativeElement.offsetTop;
    // determine whether the el is within the viewport or the visible area
    if (scrollPosition + window.innerHeight > elementPosition) {
      this.triggerAnimation();
    }
  }
}
