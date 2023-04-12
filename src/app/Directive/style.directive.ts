import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private style: ElementRef, private render: Renderer2) {
    this.render.setStyle(render, 'color', 'blue');
   }
}
