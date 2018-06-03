import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  template: `
    <app-home></app-home>
  `,
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
