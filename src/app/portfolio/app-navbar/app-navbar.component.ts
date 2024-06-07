import {Component, HostListener} from '@angular/core';

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

  @HostListener("window:scroll", [])
  onWindowListener() {
    this.isScrolled = window.scrollY > 0;
  }

}
