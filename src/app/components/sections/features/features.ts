import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
})
export class FeaturesComponent {
  features = [
    {featureName: "Feature 1"},
    {featureName: "Feature 2"},
    {featureName: "Feature 3"},
    {featureName: "Feature 4"}
  ]


}
