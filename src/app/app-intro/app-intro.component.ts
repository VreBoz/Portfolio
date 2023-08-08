import { Component } from '@angular/core';

@Component({
  selector: 'app-app-intro',
  templateUrl: './app-intro.component.html',
  styleUrls: ['./app-intro.component.scss']
})
export class AppIntroComponent {
  scrollToContact() {
    const element = document.getElementById('contact-route');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
}
}
