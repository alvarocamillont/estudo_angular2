import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this._rederer.setElementStyle(
      this._elementref.nativeElement,
      'background-color', 'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._rederer.setElementStyle(
      this._elementref.nativeElement,
      'background-color', 'white'
    );

  }

  constructor(
    private _elementref: ElementRef,
    private _rederer: Renderer) { }

}
