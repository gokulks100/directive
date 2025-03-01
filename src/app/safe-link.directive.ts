import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {

   queryParams = input('myapp');

  //  queryParams = input('myapp',{alias:'appSafeLink'});


  constructor() {
    console.log('app safe link directive active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this app');

    if (wantsToLeave) {
      const address  = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =  address + '?from='+this.queryParams;
      return;
    }
    event.preventDefault();
  }
}
