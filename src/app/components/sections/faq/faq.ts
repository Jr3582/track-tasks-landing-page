import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
})
export class FaqComponent {
  faqCards = [
    {title: "Is Just Checks Free?", description: "Yes, you can use Track Tasks for free, you will have unlimited access to all core Track Tasks features."},
    {title: "Who Is Just Checks For?", description: "Track Tasks is perfect for students, professionals, sales teams, recruiters, consultants, executives, and anyone who needs to keep things organized."},
    {title: "How Do I Get Started?", description: "Getting started is easy! Just press the navy blue download button when you first get on the landing page! And follow the directions from there!"},
    {title: "What's The Catch?", description: "Absolutely no catch at all! I just want to help people out there struggling with being organized like me!"}
  ]

}
