import { Component, inject } from '@angular/core';
import { IntroStateService } from '../../../pages/landing/intro-state';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class HeroComponent {
  //UNUSED CAROSEL OBJECTS
  carouselObj = [
    { index: 0, img: "zoompfp.jpg" },
    { index: 1, img: "teamspfp.jpg" },
    { index: 2, img: "googlepfp.png" },
    { index: 3, img: "skypepfp.png" },
    { index: 4, img: "discordpfp.jpg" },
    { index: 5, img: "slackpfp.jpg" }
  ];
  firstAnimationEnd = false;
  private finishedCount = 0;
  private TotalAnimations = 2;
  introState = inject(IntroStateService);

  goToApp() {
    window.open('https://track-tasks-production.up.railway.app/', '_blank');
  }

  onAnimEnd() {
    this.finishedCount++;
    if (this.finishedCount === this.TotalAnimations) {
      this.introState.heroAnimationDone.set(true);
    }
  }
}
