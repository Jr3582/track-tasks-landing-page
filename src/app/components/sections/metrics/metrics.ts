import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics',
  imports: [],
  templateUrl: './metrics.html',
})
export class MetricsComponent {
    metricImg = [
    {index: 0, img: "completed_Task.png"}, 
    {index: 1, img: "faster_completion.jpg"},
    {index: 2, img: "fast_delivery.jpg"},
  ];
}
