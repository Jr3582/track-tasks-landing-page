import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntroStateService {
  introDone = signal(false);
  headerAnimationDone = signal(false);
  heroAnimationDone = signal(false);
}