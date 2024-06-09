import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from "@angular/cdk/overlay";
import ProjectModel from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  container = document.getElementById("container") as HTMLDivElement;
  projects: ProjectModel[];
  nodeListOfProjects: NodeList = document.querySelectorAll<HTMLDivElement>(".item");
  @ViewChild("parentEl") parentEl: ElementRef<HTMLElement> | undefined;

  ngOnInit() {
    console.log("page loaded!")
  }

  constructor() {
    this.projects = [
      {
        name: "food order app",
        id: 1,
        src: 'food-order.webp',
        hyperLinkAddress: 'https://github.com/sagharnoursobhi/domnoo-app'
      },
      {
        name: "guess number app",
        id: 2,
        src: 'guessNumber.jpeg',
        hyperLinkAddress: 'https://sagharnoursobhi.github.io/guessing-number/'
      },
      {
        name: "persian food app",
        id: 3,
        src: 'persian-food.jpeg',
        hyperLinkAddress: 'https://sagharnoursobhi.github.io/persian-food-restaurant/'
      },
      {
        name: "rolling dice app",
        id: 4,
        src: 'iStock-Dice.jpeg',
        hyperLinkAddress: 'https://sagharnoursobhi.github.io/rollingDice/'
      },
      {
        name: "interior design website",
        id: 5,
        src: 'interior-design.jpeg',
        hyperLinkAddress: 'https://sagharnoursobhi.github.io/project-one'
      },
      {
        name: "sexy cars website",
        id: 6,
        src: 'sexy-cars.webp',
        hyperLinkAddress: 'https://github.com/sagharnoursobhi/react-scratch'
      },
      {
        name: "simple web design",
        id: 7,
        src: 'web-design.jpeg',
        hyperLinkAddress: 'https://sagharnoursobhi.github.io/start-design/'
      },
    ]
  }

  trackById(index: number, item: ProjectModel) {
    return item.id;
  }

  mouseOverHandler(event: MouseEvent) {
   let target = event.target as HTMLElement;
   if (target && !target.classList.contains(".item")) {
     target = target.parentElement as HTMLElement;
   }
   const parentImage = target?.querySelector("img") as HTMLImageElement;
   const parentText = target?.querySelector("h3") as HTMLHeadElement;
   parentText.classList.add("d-block");
   parentText.classList.remove("d-none");
   parentImage.style.opacity = "0.5";
  }

  mouseOutHandler(event: MouseEvent) {
    let target = event.target as HTMLElement;
    if (target && !target.classList.contains(".item")) {
      target = target.parentElement as HTMLElement;
    }
    const parentImage = target?.querySelector("img") as HTMLImageElement;
    const parentText = target?.querySelector("h3") as HTMLHeadElement;

    parentText.classList.remove("d-block");
    parentText.classList.add("d-none");
    parentImage.style.opacity = "1";
  }
  onScroll() {
    console.log("scrolled")
    console.log(this.container.scrollTop);
  }
}
