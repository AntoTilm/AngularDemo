import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() bgColor : string = 'darkblue';
  @Input() color : string = 'chartreuse';

  // ElementRef -> Pour récupérer l'élément sur lequel est la directive
  constructor(private _elem : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this._elem.nativeElement.style.backgroundColor = this.bgColor;
    this._elem.nativeElement.style.color = this.color;

  }

  @HostListener('mouseleave') onMouseLeave() {
    this._elem.nativeElement.style.backgroundColor = "transparent";
    this._elem.nativeElement.style.color = "black";

  }


}
