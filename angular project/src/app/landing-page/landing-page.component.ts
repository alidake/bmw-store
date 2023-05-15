import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {



  cards = [
    {
      img: "../../assets/bmw-i8.jpg",
      model: 'I8',
      description: `How many can claim to have achieved icon status before retiring from the scene? Really very few. But we have
      one...`
    },
    {
      img: "../../assets/bmw-m5.jpg",
      model: 'M5',
      description: `Super sport meets luxury: Launched in 1985, the BMW M5 is one of the co-founders of the high-performance sedan class...`
    },
    {
      img: "../../assets/bmw-m3.jpg",
      model: 'M3',
      description: `The BMW M3 is a high-performance version of the BMW 3 Series. It has been produced for every generation since the... `
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
