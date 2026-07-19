import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero';
import { FeaturesComponent } from '../../components/sections/features/features';
import { FaqComponent } from '../../components/sections/faq/faq';
import { MetricsComponent } from '../../components/sections/metrics/metrics';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { OnInit, signal, inject } from '@angular/core'
import { IntroStateService } from './intro-state';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, FeaturesComponent, FaqComponent, MetricsComponent, HeaderComponent, FooterComponent],
  templateUrl: './landing.html',
})
export class LandingComponent implements OnInit {
  private intervalId: any;
  introState = inject(IntroStateService);
  displayedText = signal('');
  title = "Track Tasks";
  counter = 0;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping() {
    this.intervalId = setInterval(() => {
      if(this.title.length === this.counter) {
        this.stopTyping();
        return;
      } else {
        this.displayedText.update(prev => prev + this.title[this.counter]);
        this.counter++;
      }
    }, 125);
  }

  stopTyping() {
    clearInterval(this.intervalId);
    this.introState.introDone.set(true);
  }
}
