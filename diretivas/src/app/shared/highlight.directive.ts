import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  private backgroundColor: string;

  @Input() defaultColor:string = 'white';
  @Input() highLightColor:string = 'yellow';

  @HostBinding('style.backgroundColor') get setColor (){
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }


}
