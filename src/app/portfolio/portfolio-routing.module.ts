import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./portfolio.component";

const routes: Routes = [
  {path: "", component: PortfolioComponent, pathMatch: "full"},
  { path: '**', component: PortfolioComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: "enabled",
  scrollOffset: [0, 64]
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
