import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pictures = [
    {
      id: 1,
      title: 'Embedded Systems',
      img: 'assets/images/embedded.jpg'
    },
    {
      id: 2,
      title: 'Power Electronics',
      img: 'assets/images/powerelec.jpg'
    },
    {
      id: 3,
      title: 'Mat Lab',
      img: 'assets/images/matlab.jpg'
    },
    {
      id: 4,
      title: ' Java',
      img: 'assets/images/java.jpg'
    },
    {
      id: 5,
      title: 'Dot Net',
      img: 'assets/images/.net.png'
    },
    {
      id: 6,
      title: 'IOT',
      img: 'assets/images/iot.jpg'
    },
  ];

}
