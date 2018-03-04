import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import templateString from './app.component.html'
import './app.component.css';


@Component({
  selector: 'my-links',
  template: templateString,
})
export class AppComponent {
  public links: any[] = [];

  constructor(private http: Http) {
    this.http.get('/api/links/all').subscribe((response: Response) => {
      this.links = response.json();
    });
  }
}
