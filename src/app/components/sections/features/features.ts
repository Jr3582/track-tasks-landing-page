import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
})
export class FeaturesComponent {
  features = [
    {featureName: "Create Projects", featureDescription: "Spin up new projects in seconds and give every initiative a home. Organize your work into clear, dedicated spaces so nothing gets lost between teams or timelines."},
    {featureName: "Create Tasks", featureDescription: "Break down projects into actionable tasks with rich detail titles, descriptions, assignees, owners, and due dates. Link related tasks together to keep dependencies clear from day one."},
    {featureName: "Collaborate", featureDescription: "Assign work, track ownership, and see who's responsible for what at a glance. Everyone stays aligned without the back-and-forth of status update meetings."},
    {featureName: "AI-Assistant", featureDescription: "Clarify your goals, and the steps to achieve those goals with our AI-assistant. Turn a rough idea into a clear task description in seconds!"}
  ]


}
