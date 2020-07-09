import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight') hovercolor: string;
  @Input() defaultColor: string;
  @HostListener('mouseenter') OnMouseEnter() {
    this.higtLight(this.hovercolor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.higtLight(null);
  }

  private higtLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
