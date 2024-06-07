import {Component, OnInit} from '@angular/core';
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

  onScroll() {
    console.log("Hello")
    console.log(this.container.scrollTop);
  }
  ngOnInit() {

  }
}
