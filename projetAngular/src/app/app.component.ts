import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
      <h1>
        toto{{title}}!
      </h1>
      
  `,
  styles: []
})
export class AppComponent {
  title:string;
}
