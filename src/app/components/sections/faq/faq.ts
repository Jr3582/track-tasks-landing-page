import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
})
export class FaqComponent {
  faqCards = [
    {title: "Is Just Checks Free?", description: "Yes, you can use Just Checks AI meeting assistant for free, you will have unlimited access to all core Just Tasks features."},
    {title: "What Is Just Tasks?", description: "Just Tasks is perfect for students, professionals, sales teams, recruiters, consultants, executives, and anyone who needs to perform well in meetings. If you're in back-to-back sales calls, lectures, or client meetings where you can't afford to look unprepared, Just Tasks delivers you answers at moments when you most need them."},
    {title: "How Do I Get Started?", description: "Getting started is easy! Just press the navy blue download button when you first get on the landing page! And follow the directions from there!"},
    {title: "What's The Catch?", description: "Absolutely no catch at all! I just want to help people out there struggling with presentations like me!"}
  ]

}
