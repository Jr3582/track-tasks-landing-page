import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule, SquareCheck } from 'lucide-angular';
import { IntroStateService } from '../../pages/landing/intro-state';


@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.html',
})
export class HeaderComponent {
  private finishedCount = 0;
  private TotalAnimations = 5;
  introState = inject(IntroStateService);
  icons = { SquareCheck }

  onAnimEnd() {
    this.finishedCount++;
    if(this.finishedCount === this.TotalAnimations) {
      this.introState.headerAnimationDone.set(true);
      console.log(this.TotalAnimations);
    }
  }
}
