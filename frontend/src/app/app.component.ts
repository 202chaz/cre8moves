import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  mailTo() {
    window.location.href = "mailto:marketing@cre8interactions.com?subject=CRE8Moves%20service%20request";
  }
}
