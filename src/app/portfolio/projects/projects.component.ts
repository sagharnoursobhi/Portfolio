import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
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

  ngOnInit() {
    const items = this.elementRef.nativeElement.querySelectorAll('.item');

    items.forEach((item: HTMLElement) => {
      this.renderer.listen(item, 'mouseover', (event: MouseEvent) => {
        this.mouseOverHandler(event);
      });

      this.renderer.listen(item, 'mouseout', (event: MouseEvent) => {
        this.mouseOutHandler(event);
      });

      this.renderer.listen(item, 'touchstart', (event: TouchEvent) => {
        this.mouseOverHandler(event);
      });

      this.renderer.listen(item, 'touchend', (event: TouchEvent) => {
        this.mouseOutHandler(event);
      });
    });
  }


  trackById(index: number, item: ProjectModel) {
    return item.id;
  }

  mouseOverHandler(event: MouseEvent | TouchEvent) {
   let target = event.target as HTMLElement;
   if (target && !target.classList.contains(".item")) {
     target = target.parentElement as HTMLElement;
   }
   const parentImage = target?.querySelector("img") as HTMLImageElement;
   const parentText = target?.querySelector("h3") as HTMLHeadElement;

    if (parentText && parentImage) {
      // Apply styles or perform actions safely
      parentText.classList.add("d-block");
      parentText.classList.remove("d-none");
      parentImage.style.opacity = "0.5";
    }
  }

  mouseOutHandler(event: MouseEvent | TouchEvent) {
    let target = event.target as HTMLElement;
    if (target && !target.classList.contains(".item")) {
      target = target.parentElement as HTMLElement;
    }
    const parentImage = target?.querySelector("img") as HTMLImageElement;
    const parentText = target?.querySelector("h3") as HTMLHeadElement;

    if (parentText && parentImage) {
      parentText.classList.remove("d-block");
      parentText.classList.add("d-none");
      parentImage.style.opacity = "1";
    }
  }
}
