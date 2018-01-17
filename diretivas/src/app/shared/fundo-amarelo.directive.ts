import { Directive , ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: 'button[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) {
    // console.log(_elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'; // ElementRef não é seguro
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow' ); // Mais seguro
  }

}
