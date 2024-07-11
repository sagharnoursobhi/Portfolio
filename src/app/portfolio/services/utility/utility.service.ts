import {ElementRef, Injectable, Renderer2} from '@angular/core';
import { message } from "../../data/constants";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  populateWords(animatedTextRef: ElementRef, renderer: Renderer2) {
      if (animatedTextRef?.nativeElement) {
        const words = message?.split(" ");
        words?.forEach((word: string, ix: number) => {
          const span = renderer.createElement("span");
          const nodeOfWord = renderer.createText(word);
          renderer.appendChild(span, nodeOfWord);
          renderer.appendChild(animatedTextRef?.nativeElement, span);
          //if word is not the last item in the array
          if (ix < words.length - 1) {
            const space = renderer.createText(" ");
            renderer.appendChild(animatedTextRef?.nativeElement, space);
          }
        });
      } else {
        console.log("animatedTextRef is undefined")
      }
  }

  triggerAnimation(animatedTextRef: ElementRef, renderer: Renderer2) {
    const spans = animatedTextRef?.nativeElement?.querySelectorAll("span");
    spans.forEach((span: HTMLElement, ix: number) => {
      setTimeout(() => {
        renderer.addClass(span, "animated");
      }, ix * 100);
    })
  }

}
