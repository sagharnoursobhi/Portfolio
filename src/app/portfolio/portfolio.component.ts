import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit() {
    // if the current url contains hash fragment
    if (window.location.hash) {
      this.router.navigateByUrl(("/")).then(r => console.log(r));
    }
  }
}
