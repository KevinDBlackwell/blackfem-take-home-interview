import { Component } from '@angular/core';
import templateString from './app.component.html'
import './app.component.css';


@Component({
  selector: 'hello-angular',
  template: templateString,
})
export class AppComponent {
  name = 'My Links!';
}
