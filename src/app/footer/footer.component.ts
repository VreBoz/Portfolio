import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router, private scrollService: ScrollService) { }

  isImpressumPage(): boolean {
    return this.router.url === '/impressum';
  }

  imageSrc = '../../assets/header.png/back-up.png';
  showImpressum = false;

  showImpressumPage() {
      this.showImpressum = true;
  }

  navigateToImpressum() {
    this.router.navigate(['/impressum']).then(() => {
      
      this.scrollService.scrollToTop();
    });
  }

  navigateToHome() {
    this.router.navigate(['/']).then(() => {
      this.scrollService.scrollToTop();
    });
  }
}
