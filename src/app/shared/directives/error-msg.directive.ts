import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este camnpo es requerido';
  htmlElement : ElementRef<HTMLBRElement>;

  @Input() set color(valor: string){
    console.log('okok')
    this._color = valor;
    this.getColor();
  }
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.getInnerHTML();
  }
  @Input() set valido(valor: boolean) {
    if(valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLBRElement>) {
    console.log('contructor directive')
    console.log(el);
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    console.log('NgOnInit directiva');
    this.getColor();
    this.getInnerHTML();
  }

  getColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.style.fontSize = '14px';
  }

  getInnerHTML(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
