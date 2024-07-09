import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  phoneNumber: string | undefined;
  gmail: string | undefined;
  subject: any | undefined;
  body: any | undefined;
  constructor() {
    this.phoneNumber = "+46737390072";
    this.gmail = "sagharnoursobhi@gmail.com";
    this.body = "Body Text";
    this.subject = "Subject";
  }

  protected readonly encodeURIComponent = encodeURIComponent;
}
