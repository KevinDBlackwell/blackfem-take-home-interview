import { Component, Input } from '@angular/core';
import templateString from './link.component.html'
import './link.component.css';


@Component({
  selector: 'link',
  template: templateString,
  host: {'class': 'row justify-content-center link'},
})
export class LinkComponent {
  @Input() public link: any;
}
