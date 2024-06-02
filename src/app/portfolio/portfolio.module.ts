import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutMeComponent,
    AppFooterComponent,
    AppNavbarComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
