import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import {ScrollingModule} from "@angular/cdk/scrolling";




@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutMeComponent,
    AppFooterComponent,
    AppNavbarComponent,],
    imports: [
        CommonModule,
        NgOptimizedImage,
        ScrollingModule
    ],
  exports: [
    PortfolioComponent,
    AppNavbarComponent
  ]
})
export class PortfolioModule { }