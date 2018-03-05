import { BrowserModule } from '@angular/platform-browser';
import { CookieXSRFStrategy, HttpModule, XSRFStrategy } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [{ provide: XSRFStrategy, useFactory: xsrfFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function xsrfFactory() {
  return new CookieXSRFStrategy('XSRF-TOKEN', 'X-CSRF-TOKEN');
}
