import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mailTo() {
    window.location.href = "mailto:marketing@cre8interactions.com?subject=CRE8Moves%20service%20request";
  }

}
