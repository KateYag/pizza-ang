import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit{

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef,
              private rend: Renderer2) {

  }

  private _backgroundColor: string = '';
  @HostBinding('style.background-color')
  get getBgColor() {
    return this._backgroundColor;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.coolInputFocusBgColor);
  }
  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    console.log(target);
  }
  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
  }

  ngOnInit() {
    this.changeElementBgColor( this.coolInputDefaultBgColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*');

    // const text = this.rend.createElement('span');
    // this.rend.setProperty(text, 'innerText', '*Обязательно для заполенения');
    // this.rend.setStyle(text, 'color', 'red');
    // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement));

  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
    //this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
