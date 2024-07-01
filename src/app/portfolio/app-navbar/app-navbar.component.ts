import {Component, HostListener} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  isScrolled:boolean;

  constructor() {
    this.isScrolled = false;
  }
  @HostListener("window:scroll", ["$event"])
  onWindowListener(event: Event) {
    this.isScrolled = window.scrollY > 0;
  }

}
