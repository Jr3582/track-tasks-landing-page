import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class HeroComponent {
  carouselObj = [
    {index: 0, img: "zoompfp.jpg"}, 
    {index: 1, img: "teamspfp.jpg"},
    {index: 2, img: "googlepfp.png"},
    {index: 3, img: "skypepfp.png"},
    {index: 4, img: "discordpfp.jpg"},
    {index: 5, img: "slackpfp.jpg"}
  ];
}
