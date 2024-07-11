import {Component, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
  }

  @HostListener("document: mousemove", ["$event"])
  onMoveListener() {
    this.renderer.addClass(document.body, "custom-cursor");
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.renderer.removeClass(document.body, 'custom-cursor');
  }
}
