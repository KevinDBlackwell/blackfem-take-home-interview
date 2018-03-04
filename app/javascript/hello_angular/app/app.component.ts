import { Component } from '@angular/core';
import './app.component.css';

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  name = 'Angular!';
}
