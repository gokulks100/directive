import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLogs]',
  standalone: true,
  host:{
    '(click)' : 'onLog()'
  }
})
export class LogsDirective {

  constructor() { }

  private elementRef = inject<any>(ElementRef)

  onLog()
  {
    console.log(this.elementRef.nativeElement);

  }

}
